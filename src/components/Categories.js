import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TAB_BORDER_COLOR, WHITE, capatalizeFirstChar, width} from '../helper';

const Categories = props => {
  const {setStatusFilter, status, data} = props || {};
  return (
    <View style={style.container}>
      <View style={style.listTab}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={style.btnTab(status === item)}
              onPress={() => setStatusFilter(item)}>
              <Text style={style.title(status === item)}>
                {capatalizeFirstChar(item)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {marginHorizontal: 10, marginTop: 15},
  listTab: {
    backgroundColor: WHITE,
    flexDirection: 'row',
  },
  btnTab: isActive => ({
    borderWidth: 0.5,
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: isActive ? TAB_BORDER_COLOR : WHITE,
    borderColor: TAB_BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  }),
  btnTabActive: {
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: 'red',
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: isActive => ({
    color: isActive ? WHITE : TAB_BORDER_COLOR,
  }),
});
export default Categories;
