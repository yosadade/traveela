import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICTelegram, ICMiniBookmark} from '../../../assets';

const Button = ({title, bgColor = '#2B9FDC', onPress, type, icon}) => {
  if (type === 'message') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container(bgColor, type)}
        onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(bgColor, type)}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor, type) => ({
    backgroundColor: bgColor,
    paddingVertical: type === 'message' ? 10 : 12,
    marginHorizontal: type === 'message' ? 27 : 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  }),
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    fontSize: 14,
  },
});
