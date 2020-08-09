import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Fonts} from '../utils';

const HistoryItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{uri: 'http://placehold.it/300x300'}}
          style={{height: 60, width: 60, marginRight: 15}}
        />
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontFamily: Fonts.MontserratSemiBold}}>#1236</Text>
            <Text
              style={{
                fontFamily: Fonts.MontserratRegular,
                fontSize: 13,
                opacity: 0.5,
              }}>
              Wabi sabi restaurant
            </Text>
          </View>
          <Text
            style={{
              fontFamily: Fonts.MontserratRegular,
              opacity: 0.7,
              color: 'green',
              fontSize: 12,
            }}>
            waiting
          </Text>
        </View>
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Text
          style={{
            color: 'red',
            fontFamily: Fonts.MontserratSemiBold,
          }}>
          $57
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HistoryItem;
