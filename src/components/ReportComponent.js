import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {
  KEY_PARAGRAPH,
  KEY_VALUE,
  PARAGRAPH,
  PARAGRAPH_HEADING,
  TABLE_BACKGROUND,
} from '../helper';
import Heading from './Heading';

const ReportComponent = props => {
  const {data} = props || {};

  const getDataView = item => {
    switch (item?.type) {
      case KEY_VALUE:
        return (
          <View>
            <Heading title={item?.heading} />
            {Object.entries(item?.data).map(([key, value]) => (
              <View style={styles.container} key={key}>
                <Text style={styles.key}>{key}</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        );
      case PARAGRAPH:
        return (
          <View>
            <Heading title={item?.heading} />
            <Text style={styles.content}>• {item?.data}</Text>
          </View>
        );
      case KEY_PARAGRAPH:
        return (
          <View>
            <Heading title={item?.heading} />
            <Text style={styles.paragraphText}>{item?.data?.ascendant}</Text>
            <Text style={styles.content}>{item?.data?.report}</Text>
          </View>
        );
    }
  };
  const renderItem = ({item, index}) => {
    return <View>{getDataView(item)}</View>;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  paragraphText: {fontSize: 18, marginBottom: 8, fontWeight: '500'},
  mainContainer: {
    marginHorizontal: 15,
    flex: 1,
    marginBottom: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: TABLE_BACKGROUND,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  content: {color: PARAGRAPH_HEADING},
  key: {
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    marginLeft: 5,
    flex: 1,
  },
});
export default ReportComponent;
