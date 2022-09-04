import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import restaurants from '../../assets/data/restaurants.json';

export const DishItemList = ({dish}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && <Image source={{uri: dish.image}} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: {fontWeight: '600', fontSize: 17},
  description: {color: 'grey', marginVertical: 5},
  price: {fontSize: 16},
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
