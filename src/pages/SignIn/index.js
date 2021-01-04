import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best over destination" />
      <Gap height={34} />
      <TextInput placeholder="Type your email address" label="Email" />
      <TextInput
        secureTextEntry
        placeholder="Type your email password"
        label="Password"
      />
      <Gap height={24} />
      <Button title="Sign In" onPress={() => {}} />
      <Gap height={12} />
      <Button
        title="Create New Account"
        bgColor="#f96d01"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
