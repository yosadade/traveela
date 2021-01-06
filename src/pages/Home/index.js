import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeProfile} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
