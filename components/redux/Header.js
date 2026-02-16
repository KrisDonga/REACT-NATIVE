import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Store</Text>
      <Text style={{ color: '#fff' }}>🛒: {cartItems}</Text>
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
