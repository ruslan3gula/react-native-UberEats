import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import {RestaurantItem} from '../../components/RestaurantItem/RestaurantItem';

export const HomeScreen = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({item}) => <RestaurantItem restaurant={item} />}
    />
  );
};

const styles = StyleSheet.create({});
