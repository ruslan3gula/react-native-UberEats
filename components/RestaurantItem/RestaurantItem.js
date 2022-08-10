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

export const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subtitle}> $6.90</Text>
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
  subtitle: {},
});
