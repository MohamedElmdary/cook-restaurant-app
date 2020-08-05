import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../utils';

const position = require('../../assets/images/restaurant-position.jpg');

const RestaurantAbout = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
          Amazing Mexican Fillipino fussion place offers the sickest california
          burrito in SF
        </Text>
        <Text
          style={{
            marginTop: 10,
            opacity: 0.5,
            marginBottom: 15,
          }}>
          The place is location 10 minutes from you at 1479 Folsom St on the
          corner of 11th St.
        </Text>
        <Image source={position} style={{width: '100%', height: 150}} />
        <Text
          style={{
            marginVertical: 15,
          }}>
          More information
        </Text>
        {['Mo - Fr: 10:00a - 8:30p', 'Sa - Su: 01:00p - 6:00p'].map((t) => {
          return (
            <Text style={{opacity: 0.5}} key={t}>
              {t}
            </Text>
          );
        })}
        <Text
          style={{
            opacity: 0.5,
            marginVertical: 10,
          }}>
          New York, NY, USA
        </Text>
        <Text
          style={{
            color: Colors.Blue,
          }}>
          https://www.behance.net/nhluong
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});

export default RestaurantAbout;
