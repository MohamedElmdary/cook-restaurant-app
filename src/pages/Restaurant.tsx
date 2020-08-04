import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';

import RestaurantMenu from './Restaurant.Menu';
import RestaurantAbout from './Restaurant.About';
import RestaurantReview from './Restaurant.Review';

const Tab = createMaterialTopTabNavigator();

const Restaurant: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Menu" style={styles.navbar}>
      <Tab.Screen name="Menu" component={RestaurantMenu} />
      <Tab.Screen name="About" component={RestaurantAbout} />
      <Tab.Screen name="Review" component={RestaurantReview} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'relative',
    top: 50,
  },
});

export default Restaurant;
