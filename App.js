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

import {FlatList} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {RestaurantDetailScreen} from './screens/RestaurantDetailScreen';
import {DishDetailsScreen} from './screens/DishDetailsScreen';
import {Basket} from './screens/Basket';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailScreen /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />
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
