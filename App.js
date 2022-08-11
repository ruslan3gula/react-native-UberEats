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

import {HeaderButtons} from './components/HeaderButtons';
import {Search} from './components/Search';
import {RestaurantItem} from './components/RestaurantItem/RestaurantItem';
import restaurants from './assets/data/restaurants.json';
import {FlatList} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
      />
      {/* <RestaurantItem restaurant={restaurants[0]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
