import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Traveela</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#2B9FDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 50,
    color: '#FFFFFF',
  },
});
