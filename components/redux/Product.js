import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

const Product = props => {
  const item = props.item;
  return (
    <View>
      (
      <View key={item.id} style={styles.card}>
        <Text style={styles.dtxt}>{item.name}</Text>
        <Text style={styles.dtxt}>$ {item.price}</Text>
        <Text style={styles.dtxt}>{item.color}</Text>
        <Image source={{ uri: item.image }} style={styles.logo} />
        <Button title="Add to Cart"></Button>
        <View style={styles.sep} />
      </View>
      )
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
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
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default Product;
