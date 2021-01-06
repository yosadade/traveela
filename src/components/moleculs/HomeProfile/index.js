import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Profile} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Traveela</Text>
        <View style={styles.wrapperSubTitle}>
          <Text style={styles.subTitle}>Good Morning </Text>
          <Text style={styles.name}>Yosada Dede</Text>
        </View>
      </View>
      <Image source={Profile} style={styles.img} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#2B9FDC',
  },
  wrapperSubTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
