import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILGetStarted} from '../../assets';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={ILGetStarted} style={styles.image} />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Come on vacation!</Text>
        <Text style={styles.subTitle}>
          Take advantage of your vacation time to go
        </Text>
        <Text style={styles.subTitle}>
          anywhere with ease, flexibility and fun
        </Text>
      </View>
      <View style={styles.wrapperButton}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
  },
  wrapperTitle: {
    marginTop: 30,
    marginBottom: 60,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#020202',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  wrapperButton: {
    marginHorizontal: 50,
  },
});
