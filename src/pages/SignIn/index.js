/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {ICEyeOn, ICEyeOff} from '../../assets';

const SignIn = ({navigation}) => {
  const refPass = useRef(null);
  const [icon, setIcon] = useState(<ICEyeOff />);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onHandleIcon = () => {
    setSecureTextEntry(!secureTextEntry);
    setIcon(secureTextEntry ? <ICEyeOff /> : <ICEyeOn />);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign In" subTitle="Find your best over destination" />
        <Gap height={34} />
        <View style={styles.container}>
          <Gap height={16} />
          <TextInput
            placeholder="Type your email address"
            label="Email"
            onSubmitEditing={() => refPass.current.focus()}
          />
          <Gap height={16} />

          <TextInput
            secureTextEntry={secureTextEntry}
            icon={icon}
            placeholder="Type your email password"
            label="Password"
            refPass={refPass}
            onPressIcon={onHandleIcon}
          />
          <Gap height={24} />
          <Button
            title="Sign In"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={12} />
          <Button
            title="Create New Account"
            bgColor="#f96d01"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </ScrollView>
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
