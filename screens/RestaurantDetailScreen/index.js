import React from 'react';
import {StyleSheet, Image, View, Text, FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DishItemList} from '../../components/DishItemList';
import {Header} from './Header';

const restaurant = restaurants[0];

export const RestaurantDetailScreen = () => {
  const {
    dishes,
    image,
    name,
    subtitle,
    restauradeliveryFee,
    minDeliveryTime,
    maxDeliveryTime,
  } = restaurant;

  console.log('RestaurantDetailScreen');
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({item}) => <DishItemList dish={item} />}
      />

      <AntDesign
        name="arrowleft"
        size={45}
        color="red"
        style={styles.iconContainer}
      />
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
