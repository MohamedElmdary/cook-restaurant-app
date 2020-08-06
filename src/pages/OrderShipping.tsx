import React from 'react';
import OrderLayout from '../components/OrderLayout';
import {View, Text, StyleSheet} from 'react-native';
import {SharedStyles} from '../utils';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import PhoneInput from '../components/PhoneInput';

const OrderShipping: React.FC = () => {
  return (
    <OrderLayout stage={2}>
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.inpContainer}>
            <Text style={SharedStyles.formLabel}>Your name*</Text>
            <TextInput style={SharedStyles.input} placeholder="John Wick" />
          </View>
          <View>
            <Text style={SharedStyles.formLabel}>Phone number*</Text>
            <PhoneInput />
          </View>
          <View style={styles.inpContainer}>
            <Text style={SharedStyles.formLabel}>Email</Text>
            <TextInput
              style={SharedStyles.input}
              placeholder="example@gmail.com"
            />
          </View>
          <View style={styles.inpContainer}>
            <Text style={SharedStyles.formLabel}>Company</Text>
            <TextInput style={SharedStyles.input} placeholder="DECOG design" />
          </View>
          <View style={styles.inpContainer}>
            <Text style={SharedStyles.formLabel}>Address</Text>
            <TextInput
              style={SharedStyles.input}
              placeholder="Some Awesome Place in this bad world"
            />
          </View>
          <View style={styles.inpContainer}>
            <Text style={SharedStyles.formLabel}>Additional Note</Text>
            <TextInput
              style={SharedStyles.input}
              placeholder="Add Line"
              multiline
              numberOfLines={5}
            />
          </View>
        </View>
      </ScrollView>
    </OrderLayout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  inpContainer: {
    marginBottom: 40,
  },
});

export default OrderShipping;
