import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICAirplan} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <ICAirplan />
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
