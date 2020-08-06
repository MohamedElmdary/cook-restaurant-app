import React from 'react';
import OrderLayout from '../components/OrderLayout';
import {View, Image, Text} from 'react-native';

const orderSuccess = require('../../assets/images/correct.png');

const OrderComplete: React.FC = () => {
  console.log(orderSuccess);
  return (
    <OrderLayout stage={4} text="OK !">
      <View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          marginVertical: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={orderSuccess} style={{height: 128, width: 128}} />
        <Text
          style={{
            marginTop: 15,
            fontSize: 25,
            opacity: 0.7,
          }}>
          Order Sucessful!
        </Text>
      </View>
    </OrderLayout>
  );
};

export default OrderComplete;
