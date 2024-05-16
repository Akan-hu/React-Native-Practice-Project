import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from './Heading';
import {BLACK, TABLE_ROW_BACKGROUND, WHITE} from '../helper';

const Gemstones = ({data}) => {
  return (
    <View style={styles.container}>
      <Heading title={data?.[0]?.heading} />
      {data.map((gemstoneObj, index) => (
        <ScrollView showsVerticalScrollIndicator={false} key={index}>
          {Object.keys(gemstoneObj.data).map((key, ind) => {
            const gemstone = gemstoneObj.data[key];
            return (
              <View key={ind}>
                <Text style={styles.label}>{key} Stone</Text>

                <View style={styles.row(true)}>
                  <Text style={styles.value_row}>Name</Text>
                  <Text style={styles.value}>{gemstone.name}</Text>
                </View>

                <View style={styles.row(false)}>
                  <Text style={styles.value_row}>Gem Key</Text>
                  <Text style={styles.value}>{gemstone.semi_gem}</Text>
                </View>

                <View style={styles.row(true)}>
                  <Text style={styles.value_row}>Wear Finger</Text>
                  <Text style={styles.value}>{gemstone.wear_finger}</Text>
                </View>

                <View style={styles.row(false)}>
                  <Text style={styles.value_row}>Wight Caret</Text>
                  <Text style={styles.value}>{gemstone.weight_caret}</Text>
                </View>

                <View style={styles.row(true)}>
                  <Text style={styles.value_row}>Wear Metal</Text>
                  <Text style={styles.value}>{gemstone.wear_metal}</Text>
                </View>

                <View style={styles.row(false)}>
                  <Text style={styles.value_row}>Wear Dat</Text>
                  <Text style={styles.value}>{gemstone.wear_day}</Text>
                </View>

                <View style={styles.row(true)}>
                  <Text style={styles.value_row}>Gem Deity</Text>
                  <Text style={styles.value}>{gemstone.gem_deity}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        // </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
  },

  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  row: isDarkBackground => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: isDarkBackground ? TABLE_ROW_BACKGROUND : WHITE,
  }),
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 13,
  },
  value: {
    flex: 1,
    padding: 10,
    fontWeight: '300',
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  value_row: {
    flex: 1,
    padding: 10,
    color: BLACK,
    fontWeight: '500',
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  gemstoneContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#ccc',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default Gemstones;
