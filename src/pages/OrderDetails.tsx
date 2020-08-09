import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SharedStyles, Fonts, Colors} from '../utils';
import {FlatList, TouchableNativeFeedback} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';

const OrderDetails: React.FC = () => {
  return (
    <View style={{display: 'flex', height: '100%'}}>
      <View style={SharedStyles.subHeader}>
        <Text style={SharedStyles.subHeaderText}>#1236</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
        }}>
        <View style={[styles.line, {marginBottom: 5}]}>
          <Text style={styles.lineText}>Wabi Sabi restaurant</Text>
          <Text style={styles.lineText}>Place: 12:00 12/06/2017</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.lineText, {color: 'green'}]}>waiting</Text>
          <Text style={styles.lineText}>Delivery: 12:30 12/06/2017</Text>
        </View>
      </View>
      <FlatList
        style={{flexGrow: 1, marginTop: 15, paddingHorizontal: 10}}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({item}) => <CartItem key={item} />}
        keyExtractor={(item) => item.toString()}
      />
      <View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            marginVertical: 15,
          }}>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginBottom: 10,
              paddingBottom: 10,
            }}>
            <View style={[styles.line, {marginBottom: 5}]}>
              <Text style={styles.lineText}>Sub total:</Text>
              <Text style={[styles.lineText, styles.lineTextPrice]}>$59</Text>
            </View>
            <View style={[styles.line, {marginBottom: 5}]}>
              <Text style={styles.lineText}>Shipping free:</Text>
              <Text style={[styles.lineText, styles.lineTextPrice]}>$3</Text>
            </View>
            <View style={[styles.line, {marginBottom: 5}]}>
              <Text style={styles.lineText}>Discount:</Text>
              <Text style={[styles.lineText, styles.lineTextPrice]}>-$5</Text>
            </View>
          </View>
          <View style={styles.line}>
            <Text
              style={[styles.lineText, {fontFamily: Fonts.MontserratSemiBold}]}>
              Grand total:
            </Text>
            <Text style={[styles.lineText, styles.lineTextPrice]}>$57</Text>
          </View>
        </View>
        <View>
          <TouchableNativeFeedback
            style={{
              height: 60,
              backgroundColor: Colors.Orange,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>CANCEL THIS ORDER</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineText: {
    opacity: 0.5,
    fontSize: 13,
    fontFamily: Fonts.MontserratRegular,
  },
  lineTextPrice: {
    opacity: 1,
    color: 'red',
  },
});

export default OrderDetails;
