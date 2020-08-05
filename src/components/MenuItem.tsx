import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {MenuModel} from '../pages/Restaurant.Menu';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Fonts, Colors} from '../utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  item: MenuModel;
}

const MenuItem: React.FC<Props> = ({item: {image, name, price}}) => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={{width: '100%', height: 150}} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.buyContainer}>
            <TouchableWithoutFeedback
              style={styles.buyOp}
              onPress={() => setAmount(amount > 0 ? amount - 1 : 0)}>
              <FeatherIcon name="minus-circle" size={25} />
            </TouchableWithoutFeedback>
            <Text style={{marginHorizontal: 10}}>{amount}</Text>
            <TouchableWithoutFeedback
              style={styles.buyOp}
              onPress={() => setAmount(amount + 1)}>
              <FeatherIcon name="plus-circle" size={25} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    opacity: 0.6,
    fontFamily: Fonts.MontserratSemiBold,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.Orange,
    fontSize: 20,
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

export default MenuItem;
