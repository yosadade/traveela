import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  TextInput,
  DestinationCard,
  HomeTabSection,
} from '../../components';
import {ICSearch, ILMerbabu, ILBeach1, ILLake1} from '../../assets';

const Home = ({navigation}) => {
  const destination = [
    {
      id: 1,
      name: 'Merbabu Montain',
      rating: 5,
      image: ILMerbabu,
    },
    {
      id: 2,
      name: 'Indrayanti Beach',
      rating: 3,
      image: ILBeach1,
    },
    {
      id: 3,
      name: 'Rawa Pening',
      rating: 3.5,
      image: ILLake1,
    },
  ];
  return (
    <View style={styles.page}>
      <HomeProfile />
      <TextInput
        type="search"
        placeholder="Where you gonna go?"
        bgColor="#F2F2F2"
        border={0}
        icon={<ICSearch />}
      />
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.containerCard}>
            {destination.map((item) => {
              return (
                <DestinationCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  onPress={() => navigation.navigate('DestinationDetail')}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerCard: {
    flexDirection: 'row',
    marginLeft: 24,
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
    marginVertical: 12,
  },
});
