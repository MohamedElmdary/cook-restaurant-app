import React from 'react';
import OrderLayout from '../components/OrderLayout';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import OctIcon from 'react-native-vector-icons/Octicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils';

const data: [string, string][] = [
  ['Number', '2221 9986 6626 6666'],
  ['Name', 'NHLuong'],
  ['Bank', 'Techcombank'],
  ['Bank branch', 'Tay Ho - Ha Noi'],
];

const OrderPayment: React.FC = () => {
  const mapCallback = ([s1, s2]: [string, string], i: number) => {
    return (
      <View style={styles.line} key={i}>
        <Text style={[styles.lineText, {opacity: 0.5}]}>{s1}:</Text>
        <Text style={styles.lineText}>{s2}</Text>
      </View>
    );
  };

  return (
    <OrderLayout stage={3} text="PLACE ORDER">
      <ScrollView style={styles.container}>
        <View style={styles.paymentContainer}>
          <View
            style={[styles.payment, {backgroundColor: '#ccc', opacity: 0.5}]}>
            <Text style={{fontSize: 18, color: 'black', opacity: 0.7}}>
              Money Transfer
            </Text>
            <OctIcon
              name="credit-card"
              size={28}
              color="black"
              style={{opacity: 0.7}}
            />
          </View>
          <View style={styles.payment}>
            <Text style={{fontSize: 18, color: 'white'}}>Pay at Pickup</Text>
            <IonIcon name="cash-outline" size={28} color="white" />
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            paddingBottom: 20,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
          {data.map(mapCallback)}
        </View>
        <View style={styles.line}>
          <Text style={[styles.lineText, {opacity: 0.5}]}>Content:</Text>
          <Text style={[styles.lineText, {color: 'red'}]}>CUKCUK #1236</Text>
        </View>
      </ScrollView>
    </OrderLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    marginVertical: 15,
    padding: 15,
  },
  paymentContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  payment: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.Orange,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  lineText: {
    color: '#333',
    fontSize: 16,
  },
});

export default OrderPayment;
