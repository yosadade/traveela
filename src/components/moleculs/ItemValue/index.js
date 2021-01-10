import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemValue = () => {
  return (
    <View>
      <Text style={styles.label}>Facilities:</Text>
      <Text style={styles.desc}>
        Ticket, tour guide, breakfast, tent, carrier, sleeping bag, nesting,
        led, parking
      </Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  desc: {
    fontSize: 13.5,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
});
