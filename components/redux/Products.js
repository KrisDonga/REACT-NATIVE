import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { addToCart } from './action';
import { useDispatch } from 'react-redux';
import React from 'react';

const Products = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const HandleAddToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <View>
      <View key={item.id} style={styles.card}>
        <Text style={styles.dtxt}>{item.name}</Text>
        <Text style={styles.dtxt}>$ {item.price}</Text>
        <Text style={styles.dtxt}>{item.color}</Text>
        <Image source={{ uri: item.image }} style={styles.logo} />
        <Button
          title="Add to Cart"
          onPress={() => HandleAddToCart(item)}
        ></Button>
        <View style={styles.sep} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dtxt: {
    fontSize: 18,
    marginBottom: 5,
  },
  logo: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  sep: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 25,
    paddingBottom: 50,
    borderRadius: 8,
  },
});

export default Products;
