/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListDestination} from '..';
import {ILMerbabu, ILBeach1, IL1} from '../../../assets';
import {ItemListMenu} from '..';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: '#FFFFFF',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{
      width: 'auto',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontFamily: 'Poppins-Medium',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListMenu label="Edit Profile" subTitle="Last update yesterday" />
      <ItemListMenu label="Home Address" subTitle="Change your address" />
    </View>
  );
};

const Traveela = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListMenu label="Rate App" subTitle="On Google Play Store" />
      <ItemListMenu label="Language" subTitle="Avaible 3 Languages" />
      <ItemListMenu label="Help Center" subTitle="Read our guidelines" />
      <ItemListMenu label="Privacy & Policy" subTitle="Read our guidelines" />
      <ItemListMenu label="Term & Condition" subTitle="Read our guidelines" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = ({onPress}) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Traveela'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: Traveela,
  });
  return (
    <TabView
      onPress={onPress}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default ProfileTabSection;
