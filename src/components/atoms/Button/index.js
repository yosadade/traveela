import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, bgColor = '#2B9FDC', onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(bgColor)}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    backgroundColor: bgColor,
    paddingVertical: 12,
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    fontSize: 14,
  },
});
