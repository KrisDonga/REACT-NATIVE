import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from './components/redux/Header';
import Products from './components/redux/Products';

const App = () => {
  const product = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      color: 'Red',
      price: 19.99,
      image: 'https://picsum.photos/seed/shirt-red/400/400',
    },
    {
      id: 2,
      name: 'Running Sneakers',
      color: 'Black',
      price: 79.99,
      image: 'https://picsum.photos/seed/shoes-black/400/400',
    },
    {
      id: 3,
      name: 'Denim Jacket',
      color: 'Blue',
      price: 59.5,
      image: 'https://picsum.photos/seed/jacket-blue/400/400',
    },
    {
      id: 4,
      name: 'Summer Hat',
      color: 'Beige',
      price: 14.25,
      image: 'https://picsum.photos/seed/hat-beige/400/400',
    },
    {
      id: 5,
      name: 'Leather Backpack',
      color: 'Brown',
      price: 120.0,
      image: 'https://picsum.photos/seed/backpack-brown/400/400',
    },
    {
      id: 6,
      name: 'Smart Watch Strap',
      color: 'Green',
      price: 24.99,
      image: 'https://picsum.photos/seed/watch-green/400/400',
    },
    {
      id: 7,
      name: 'Wireless Headphones',
      color: 'White',
      price: 149.99,
      image: 'https://picsum.photos/seed/headphones-white/400/400',
    },
    {
      id: 8,
      name: 'Yoga Mat',
      color: 'Purple',
      price: 29.95,
      image: 'https://picsum.photos/seed/mat-purple/400/400',
    },
  ];

  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {product.map(item => (
            <Products key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
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

export default App;
