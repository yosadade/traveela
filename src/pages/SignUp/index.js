import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        back
        title="Sign Up"
        subTitle="Register and booking"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={styles.photoWrapper}>
          <View style={styles.borderPhoto}>
            <Text style={styles.titlePhoto}>Add Photo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput label="Full Name" placeholder="Type your full name" />
      <TextInput label="Email Address" placeholder="Type your full email" />
      <TextInput label="Full Password" placeholder="Type your password" />
      <Gap height={24} />
      <Button title="Continue" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoWrapper: {
    marginTop: 50,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  borderPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
});
