import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from './Heading';
import ManglikPresentRule from './ManglikDetails';
import ManglikCancelRule from './ManglikCancelRule';
import {
  BLACK,
  PARAGRAPH_HEADING,
  TABLE_HEADING_BACKGROUND,
  WHITE,
} from '../helper';

const Dosha = ({data}) => {
  const renderManglikDetails = (dataKey, dataValue, item) => {
    if (dataKey === 'manglik_present_rule' && item.manglik_present_rule) {
      return <ManglikPresentRule data={item.manglik_present_rule} />;
    }
    if (
      dataKey === 'manglik_cancel_rule' &&
      item?.manglik_cancel_rule &&
      item?.manglik_cancel_rule?.length > 0
    ) {
      return <ManglikCancelRule />;
    }
  };
  const hideRules = dataKey => {
    return (
      dataKey === 'manglik_cancel_rule' || dataKey === 'manglik_present_rule'
    );
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {data &&
        data.map((item, index) => (
          <View key={index}>
            <Heading textStyle={styles.headingText} title={item.heading} />
            {item.type === 'KEY_PARAGRAPH' ? (
              <View>
                {Object.entries(item.data).map(
                  ([dataKey, dataValue], dataIndex) => {
                    if (
                      item.data.manglik_present_rule &&
                      item.data.manglik_cancel_rule
                    ) {
                      return (
                        <View>
                          {!hideRules(dataKey) && (
                            <View
                              key={dataIndex}
                              style={styles.dataContainer(
                                dataValue?.length > 15,
                              )}>
                              {dataValue?.length > 15 ? (
                                <Text style={styles.dataKey}>{dataKey} </Text>
                              ) : (
                                <Text style={styles.dataKey}>{dataKey}: </Text>
                              )}
                              <Text
                                style={styles.dataValue(
                                  dataValue?.length > 15,
                                )}>
                                {dataValue.toString()}
                              </Text>
                            </View>
                          )}

                          {renderManglikDetails(dataKey, dataValue, item?.data)}
                        </View>
                      );
                    } else {
                      return (
                        <View
                          key={dataIndex}
                          style={styles.dataContainer(dataValue?.length > 15)}>
                          {dataValue?.length > 15 ? (
                            <Text style={styles.dataKey}>{dataKey} </Text>
                          ) : (
                            <Text style={styles.dataKey}>{dataKey}: </Text>
                          )}
                          <Text
                            style={styles.dataValue(dataValue?.length > 15)}>
                            {dataValue.toString()}
                          </Text>
                        </View>
                      );
                    }
                  },
                )}
              </View>
            ) : (
              <View style={{justifyContent: 'center'}}>
                {item.data.map((paragraph, pIndex) => (
                  <Text key={pIndex} style={styles.paragraph}>
                    • {paragraph}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 15, marginBottom: 10},
  headingText: {fontSize: 20},
  dataKey: {color: BLACK, fontWeight: '500', fontSize: 16},

  dataContainer: isColumnBise => ({
    flexDirection: isColumnBise ? 'column' : 'row',
    alignItems: !isColumnBise ? 'center' : null,
    padding: 5,
  }),
  dataValue: isColumnBise => ({
    fontSize: 14,
    marginTop: isColumnBise ? 7 : 0,

    paddingVertical: 5,
  }),
  paragraph: {
    padding: 10,
    alignItems: 'center',
    color: PARAGRAPH_HEADING,
    marginTop: 5,
    borderColor: TABLE_HEADING_BACKGROUND,
    borderWidth: 1.4,
  },
});
export default Dosha;
