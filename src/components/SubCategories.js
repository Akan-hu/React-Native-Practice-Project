import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TAB_BORDER_COLOR, WHITE} from '../helper';
import {capatalizeFirstChar} from '../helper';
const SubCategories = props => {
  const {data, subCategoryActive, handleClick} = props || {};
  return (
    <View style={{marginHorizontal: 10, marginTop: 8}}>
      <View style={style.listTab}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data &&
            Object.keys(data).map((categoryKey, index) => (
              <TouchableOpacity
                style={style.btnTab(subCategoryActive === categoryKey)}
                onPress={() => handleClick(categoryKey)}>
                <Text style={style.title(subCategoryActive === categoryKey)}>
                  {capatalizeFirstChar(categoryKey)}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
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
export default SubCategories;
