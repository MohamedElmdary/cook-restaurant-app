import React from 'react';
import OrderLayout from '../components/OrderLayout';
import {View, ScrollView} from 'react-native';
import CartItem from '../components/CartItem';

const OrderPreview: React.FC = () => {
  return (
    <OrderLayout>
      <ScrollView>
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
          }}>
          {[0, 1, 2, 3, 4].map((x) => (
            <CartItem key={x} />
          ))}
        </View>
      </ScrollView>
    </OrderLayout>
  );
};

export default OrderPreview;
