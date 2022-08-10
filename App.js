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

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <HeaderButtons />
      <Search />
      <View style={styles.container}>
        <View>
          <RestaurantItem />
        </View>
      </View>
    </SafeAreaView>
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
