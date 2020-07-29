import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {SharedStyles} from '../utils';

const PhoneInput: React.FC = () => {
  return (
    <View style={styles.phoneContainer}>
      <TextInput
        keyboardType="number-pad"
        placeholder="+84"
        style={[SharedStyles.input, styles.phoneControl1]}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="985234812"
        style={[SharedStyles.input, styles.phoneControl2]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  phoneControl1: {
    width: 100,
    marginRight: 15,
  },
  phoneControl2: {
    flexGrow: 1,
  },
});

export default PhoneInput;
