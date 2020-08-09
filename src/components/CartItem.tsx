import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Fonts, Colors} from '../utils';

const CartItem: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={{uri: 'http://placehold.it/100x100'}}
        />
        <View>
          <Text style={{fontSize: 15, fontFamily: Fonts.MontserratSemiBold}}>
            Curied Samisas
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MontserratRegular,
              fontSize: 11,
              opacity: 0.6,
            }}>
            Com bo 1, Com bo 2
          </Text>
          <Text
            style={{
              marginTop: 'auto',
              color: Colors.Orange,
              fontFamily: Fonts.MontserratSemiBold,
              fontSize: 16,
            }}>
            $ 12
          </Text>
        </View>
      </View>
      <View style={styles.buyContainer}>
        <TouchableWithoutFeedback
          style={styles.buyOp}
          onPress={() => setAmount(amount > 1 ? amount - 1 : 1)}>
          <FeatherIcon name="minus-circle" size={20} />
        </TouchableWithoutFeedback>
        <Text style={{marginHorizontal: 10}}>{amount}</Text>
        <TouchableWithoutFeedback
          style={styles.buyOp}
          onPress={() => setAmount(amount + 1)}>
          <FeatherIcon name="plus-circle" size={20} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  buyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyOp: {
    opacity: 0.2,
  },
});

export default CartItem;
