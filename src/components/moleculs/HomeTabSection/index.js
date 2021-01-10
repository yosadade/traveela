/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListDestination} from '..';
import {ILMerbabu, ILBeach1, ILLake1, IL1, ILRiver1} from '../../../assets';

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

const Montain = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListDestination
        name="Merbabu"
        image={ILMerbabu}
        price="230.0000"
        rating={4}
        onPress={() => navigation.navigate('DestinationDetail')}
      />
    </View>
  );
};

const Beach = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListDestination
        name="Gunung Kidul"
        image={ILBeach1}
        price="180.0000"
        rating={4}
        onPress={() => navigation.navigate('DestinationDetail')}
      />
      <ItemListDestination
        name="Kintamani"
        image={IL1}
        price="180.0000"
        rating={5}
        onPress={() => {}}
      />
    </View>
  );
};

const Lake = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListDestination
        name="Rawa Pening"
        image={ILLake1}
        price="10.0000"
        rating={4}
        onPress={() => navigation.navigate('DestinationDetail')}
      />
    </View>
  );
};

const River = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListDestination
        name="Goa Pindul"
        image={ILRiver1}
        price="10.0000"
        rating={4}
        onPress={() => navigation.navigate('DestinationDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = ({onPress}) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Montain'},
    {key: '2', title: 'Beach'},
    {key: '3', title: 'Lake'},
    {key: '4', title: 'River'},
  ]);

  const renderScene = SceneMap({
    1: Montain,
    2: Beach,
    3: Lake,
    4: River,
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

export default HomeTabSection;
