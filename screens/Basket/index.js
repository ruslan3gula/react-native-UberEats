import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import restaurants from '../../assets/data/restaurants.json';
const dish = restaurants[0].dishes[0];

export const Basket = () => {
  const [quantity, setQuantity] = useState(0);
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => setQuantity(quantity + 1);

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}> Basket</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={'black'}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={'black'}
          onPress={() => setQuantity(quantity + 1)}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket ${getTotal()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1, width: '100%', paddingVertical: 30, padding: 10},
  name: {fontSize: 30, fontWeight: '600', marginVertical: 10},
  separator: {
    height: 1,
    color: 'red',
    marginVertical: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
