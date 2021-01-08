import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemListDestination = ({
  image,
  name,
  price,
  onPress,
  item,
  orderItems,
  totalOrder,
  type,
  date,
  status,
  rating,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
                {/* <Numbers number={price} style={styles.titlePrice} /> */}
              </View>
            </View>
            <Rating number={rating} />
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
                {/* <Numbers number={price} style={styles.titlePrice} /> */}
              </View>
            </View>
            <Rating number={rating} />
          </>
        );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default ItemListDestination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlePrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
    // color: '#020202',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
  },
  statusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: (status) => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginRight: 3,
  },
});
