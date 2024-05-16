import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Heading from './Heading';
import {TABLE_HEADING_BACKGROUND, TABLE_ROW_BACKGROUND, WHITE} from '../helper';

const HouseCupspsAndSandhi = ({data}) => {
  const dataList = data[0]?.data;

  return (
    <View style={styles.container}>
      <Heading title={data[0]?.heading} />
      <View style={styles.header}>
        <Text style={styles.headerCellHouse}>House</Text>
        <Text style={styles.headerCell}>Degree</Text>

        <Text style={styles.headerCell}>Sign</Text>
        <Text style={styles.headerCell}>Sign Lord</Text>
      </View>
      {dataList.map((item, index) => (
        <View key={index}>
          <View style={styles.headContainer(index % 2 !== 0)}>
            <Text style={styles.headTextHouse}>{item?.house}</Text>
            <Text style={styles.headText}>{item?.degree}</Text>
            <Text style={styles.headText}>{item?.sign}</Text>
            <Text style={styles.headText}>{item?.sign_lord}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, flex: 1},
  headContainer: isBackgroundReq => ({
    backgroundColor: isBackgroundReq ? TABLE_ROW_BACKGROUND : WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  headTextHouse: {
    flex: 0.6,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
  },
  headText: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: TABLE_HEADING_BACKGROUND,
  },
  headerCellHouse: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    flex: 0.6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerCell: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default HouseCupspsAndSandhi;
