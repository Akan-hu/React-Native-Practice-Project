import {StyleSheet, SafeAreaView, ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Categories from './src/components/Categories';
import SubCategories from './src/components/SubCategories';
import ReportComponent from './src/components/ReportComponent';
import HouseCupspsAndSandhi from './src/components/HouseCupspsAndSandhi';
import Dosha from './src/components/Dosha';
import Gemstones from './src/components/Gemstones';

const App = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('report');
  const [subCategoryActive, setSubCategoryActive] =
    useState('favourablePoints');
  const [selectedCategory, setSelectedCategory] = useState('report'); // Add selectedCategory state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch('https://harpreetcd.github.io/reactnative.json');
    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);
  };

  /** extracting categories keys from data */
  const categories = Object.keys(data);

  const setStatusFilter = status => {
    setStatus(status);
    setSelectedCategory(status);

    const subCategories = Object.keys(data[status]);

    /** setting first subcategory as active for each category */
    if (subCategories.length > 0) {
      setSubCategoryActive(subCategories[0]);
    } else {
      setSubCategoryActive(null);
    }
  };
  const handleClick = item => {
    setSubCategoryActive(item);
  };
  const showSubCategories = status === 'report' || status === 'dosha';
  const getDetailsView = () => {
    switch (status) {
      case 'report':
        return (
          subCategoryActive && (
            <ReportComponent data={data[selectedCategory][subCategoryActive]} />
          )
        );

      case 'houseCuspsAndSandhi':
        return <HouseCupspsAndSandhi data={data[selectedCategory]} />;

      case 'dosha':
        return (
          subCategoryActive && (
            <Dosha data={data[selectedCategory][subCategoryActive]} />
          )
        );

      case 'gemstones':
        return <Gemstones data={data[selectedCategory]} />;

      default:
        null;
    }
  };
  return (
    <SafeAreaView style={style.mainView}>
      {!loading ? (
        <View style={style.mainView}>
          {/** rendering categories */}
          <Categories
            status={status}
            setStatusFilter={setStatusFilter}
            data={categories}
          />
          {/** rendering subcategories */}
          {showSubCategories ? (
            <SubCategories
              data={data[selectedCategory]}
              subCategoryActive={subCategoryActive}
              handleClick={handleClick}
            />
          ) : null}
          {data[selectedCategory] && subCategoryActive && getDetailsView()}
        </View>
      ) : (
        /** show loader if data is not fetched */
        <View style={style.indicatorView}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  indicatorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {flex: 1},
});

export default App;
