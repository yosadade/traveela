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
      <Gap height={34} />
      <View style={styles.container}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <TextInput label="Email Address" placeholder="Type your full email" />
        <TextInput label="Phone Number" placeholder="Type your phone number" />
        <TextInput
          secureTextEntry
          label="Password"
          placeholder="Type your password"
        />
        <TextInput
          secureTextEntry
          label="Confirm Password"
          placeholder="Type your confirm password"
        />
        <Gap height={24} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
