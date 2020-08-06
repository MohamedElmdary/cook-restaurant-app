import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Fonts, Colors} from '../utils';
import OrderStage from './OrderStage';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

interface Props {
  text?: string;
  stage?: 1 | 2 | 3 | 4;
}

const OrderLayout: React.FC<Props> = ({children, text = 'NEXT', stage}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>My Order</Text>
      </View>
      <View style={styles.contentContainer}>
        <OrderStage stage={stage} />
        {children}
      </View>
      <TouchableNativeFeedback
        style={styles.btn}
        onPress={() => {
          console.log('works?');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontFamily: Fonts.MontserratSemiBold,
          }}>
          {text}
        </Text>
      </TouchableNativeFeedback>
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
  headerTxt: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 16,
  },
  contentContainer: {
    height: Dimensions.get('window').height - 170,
  },
  btn: {
    width: '100%',
    backgroundColor: Colors.Orange,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrderLayout;
