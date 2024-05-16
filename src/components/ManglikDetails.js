import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Heading from './Heading';
import {
  BLACK,
  TABLE_BACKGROUND,
  TABLE_HEADING_BACKGROUND,
  TABLE_ROW_BACKGROUND,
  WHITE,
} from '../helper';

const ManglikPresentRule = ({data, key}) => {
  return (
    <View>
      <Heading title={'Manglik Present Rule'} textStyle={styles.headingText} />
      {Object.entries(data).map(([dataKey, dataValue], dataIndex) => {
        return (
          <View key={dataIndex}>
            <Text style={styles.key}>{dataKey}</Text>
            <View style={styles.paragraph}>
              {dataValue?.map((item, index) => (
                <Text style={styles.value} key={index}>
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {fontSize: 17},
  key: {fontSize: 16, color: BLACK},
  value: {paddingVertical: 3, color: BLACK},
  paragraph: {
    marginVertical: 8,
    backgroundColor: WHITE,
    padding: 5,
    gap: 2,
    borderColor: TABLE_HEADING_BACKGROUND,
    borderWidth: 1.4,
  },
});
export default ManglikPresentRule;
