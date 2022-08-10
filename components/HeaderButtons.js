import React, {useState} from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const HeaderButtons = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.button}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({text, setActiveTab, activeTab}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 20,
      borderRadius: 29,
    }}
    onPress={() => setActiveTab(text)}>
    <Text
      style={{
        color: activeTab === text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
