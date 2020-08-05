import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import RestaurantMenu from './Restaurant.Menu';
import RestaurantAbout from './Restaurant.About';
import RestaurantReview from './Restaurant.Review';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts, Colors} from '../utils';

const Tab = createMaterialTopTabNavigator();

const Restaurant: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'http://placehold.it/350x700'}}
        style={styles.image}>
        <View style={styles.navbar}>
          <TouchableNativeFeedback
            onPress={() => {
              console.log('goBack');
            }}>
            <FeatherIcon name="x" size={23} color="white" />
          </TouchableNativeFeedback>
          <Text style={styles.navbarTitle}>Wabi Sabi Restaurant</Text>
          <TouchableNativeFeedback
            onPress={() => {
              console.log('toggle fav');
            }}>
            <MaterialIcon name="favorite-border" size={23} color="white" />
          </TouchableNativeFeedback>
        </View>
      </ImageBackground>
      <SafeAreaView style={styles.tabsContainer}>
        <View style={styles.deatails}>
          <View>
            <Text style={{fontFamily: Fonts.MontserratSemiBold, fontSize: 18}}>
              Wabi Sabi Restauran
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  opacity: 0.4,
                }}>
                New York, NY, USA -
              </Text>
              <Text style={{color: Colors.Orange}}> 2Km away</Text>
            </View>
          </View>
          <View style={styles.status}>
            <Text style={{color: 'white'}}>OPEN</Text>
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="Review"
          tabBarOptions={{
            activeTintColor: Colors.Orange,
            inactiveTintColor: 'rgba(0, 0, 0, 0.7)',
            indicatorStyle: {
              backgroundColor: Colors.Orange,
              height: 3,
            },
          }}>
          <Tab.Screen name="Menu" component={RestaurantMenu} />
          <Tab.Screen name="About" component={RestaurantAbout} />
          <Tab.Screen name="Review" component={RestaurantReview} />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 250,
  },
  tabsContainer: {
    display: 'flex',
    height: Dimensions.get('screen').height - 230,
    paddingLeft: 15,
    paddingRight: 15,
    transform: [{translateY: -90}],
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  navbarTitle: {
    fontFamily: Fonts.MontserratBold,
    color: 'white',
    fontSize: 20,
  },
  deatails: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: '#e4e3e3',
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.Orange,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default Restaurant;
