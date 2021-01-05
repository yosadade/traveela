import React, {useRef, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {ICEyeOn, ICEyeOff} from '../../assets';

const SignUp = ({navigation}) => {
  const refPass = useRef(null);
  const [icon, setIcon] = useState(<ICEyeOff />);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressIcon = () => {
    console.log('press icon');
    setSecureTextEntry(!secureTextEntry);
    // setIcon(<ICEyeOn />);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          back
          title="Sign Up"
          subTitle="Register and booking"
          onPress={() => navigation.goBack()}
        />
        <Gap height={34} />
        <View style={styles.container}>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            onSubmitEditing={() => refPass.current.focus()}
          />
          <TextInput
            label="Email Address"
            placeholder="Type your full email"
            onSubmitEditing={() => refPass.current.focus()}
            refPass={refPass}
          />
          <TextInput
            label="Phone Number"
            placeholder="Type your phone number"
            onSubmitEditing={() => refPass.current.focus()}
          />
          <TextInput
            secureTextEntry={secureTextEntry}
            bottom={-12}
            icon={icon}
            label="Password"
            placeholder="Type your password"
          />
          <TextInput
            secureTextEntry={secureTextEntry}
            bottom={-12}
            icon={icon}
            label="Confirm Password"
            placeholder="Type your confirm password"
            onPressIcon={onPressIcon}
          />
          <Gap height={24} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
          <Gap height={24} />
        </View>
      </View>
    </ScrollView>
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
