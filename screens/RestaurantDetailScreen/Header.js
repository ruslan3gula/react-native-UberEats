import React from 'react';
import {StyleSheet, Image, View, Text, FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';

const restaurant = restaurants[0];

export const Header = () => {
  console.log('Header');

  const {
    dishes,
    image,
    name,
    subtitle,
    restauradeliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
  } = restaurant;
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>
        ${restauradeliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime}
        minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {width: '100%', aspectRatio: 5 / 3},
  title: {fontSize: 35, fontWeight: '600', marginVertical: 10},
  subtitle: {fontSize: 15, color: 'grey'},
  container: {margin: 10},
});
