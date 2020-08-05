import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {Fonts, Colors} from '../utils';

const Cart: React.FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: Fonts.MontserratSemiBold,
            fontSize: 16,
          }}>
          My Cart
        </Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <FlatList
          style={{height: Dimensions.get('window').height - 215}}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({item}) => <CartItem key={item} />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: Fonts.MontserratSemiBold,
            }}>
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  btn: {
    width: '100%',
    backgroundColor: Colors.Orange,
    paddingVertical: 20,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Cart;
