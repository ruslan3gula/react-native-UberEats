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

export const RestaurantItem = ({restaurant}) => {
  const {name, image, deliveryFee, minDeliveryTime, maxDeliveryTime, rating} =
    restaurant;
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          // uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime}
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },

  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {fontSize: 16, fontWeight: '500', margin: 5},
  subtitle: {
    color: 'grey',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
