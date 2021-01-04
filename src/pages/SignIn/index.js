import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best over destination" />
      <Gap height={34} />
      <View style={styles.container}>
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
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
