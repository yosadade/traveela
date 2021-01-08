import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, name, rating, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.rating}>
            <View style={styles.star}>
              <Rating number={rating} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 210,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 24,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 10,
  },
  image: {
    width: 200,
    height: 210,
    resizeMode: 'cover',
  },
  content: {
    marginTop: 'auto',
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
