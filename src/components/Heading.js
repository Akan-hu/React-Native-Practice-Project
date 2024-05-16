import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BLACK} from '../helper';

const Heading = ({title, textStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginVertical: 15},
  text: {fontSize: 20, fontWeight: '600', color: BLACK},
});
export default Heading;
