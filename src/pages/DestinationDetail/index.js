import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../components';
import {ILMerbabu, ICBackWhite} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ILMerbabu} style={styles.cover}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <ICBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <TouchableOpacity style={styles.message}>
            <Button type="message" bgColor="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.mainContent}>
            <Text style={styles.title}>
              Merbabu Mountain, Kabupaten Magelang
            </Text>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae ex ac turpis mollis pretium. Pellentesque elementum, libero
              iaculis porta aliquet, nisl neque fermentum erat, vitae sagittis
              tellus arcu id eros. Morbi eu nulla in nunc imperdiet dignissim.
              Praesent dapibus dictum mauris, et vestibulum velit efficitur
              sagittis
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae ex ac turpis mollis pretium. Pellentesque elementum, libero
              iaculis porta aliquet, nisl neque fermentum erat, vitae sagittis
              tellus arcu id eros. Morbi eu nulla in nunc imperdiet dignissim.
              Praesent dapibus dictum mauris, et vestibulum velit efficitur
              sagittis`
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae ex ac turpis mollis pretium. Pellentesque elementum, libero
              iaculis porta aliquet, nisl neque fermentum erat, vitae sagittis
              tellus arcu id eros. Morbi eu nulla in nunc imperdiet dignissim.
              Praesent dapibus dictum mauris, et vestibulum velit efficitur
              sagittis`
            </Text>
            <Text style={styles.label}>Facilities:</Text>
            <Text style={styles.desc}>
              Ticket, tour guide, breakfast, tent, carrier, sleeping bag,
              nesting, led, parking
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.labelPrice}>Total Price:</Text>
          <Text style={styles.priceTotal}>IDR 320.000</Text>
        </View>
        <View style={styles.button}>
          <Button title="Booking Now" />
        </View>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cover: {
    height: 400,
  },
  back: {
    width: 30,
    height: 30,
    marginTop: 24,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    paddingTop: 26,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  message: {
    width: 100,
    marginTop: -50,
    marginLeft: 'auto',
  },
  mainContent: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
    marginBottom: 16,
  },
  desc: {
    fontSize: 13.5,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
  },
  priceContainer: {
    flex: 1,
  },
  labelPrice: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  button: {
    width: 163,
    // flex: 1,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
