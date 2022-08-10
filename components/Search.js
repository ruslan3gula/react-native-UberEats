import React from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Ionicons} from 'react-native-vector-icons';
import {AntDesign} from 'react-native-vector-icons';

export const Search = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            color: '#eee',
            height: 38,
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons
              style={{marginLeft: 10}}
              name="location-sharp"
              size={24}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Text>Search</Text>
            <AntDesign name="clockcircle" size={11} style={{marginLeft: 8}} />
          </View>
        )}
      /> */}

      <Text>test</Text>
    </View>
  );
};
