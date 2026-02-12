import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Store</Text>
      <Text style={{ color: '#fff' }}>🛒: 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 85,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
});

export default Header;
