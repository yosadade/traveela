import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Link = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#7D8797',
  },
});
