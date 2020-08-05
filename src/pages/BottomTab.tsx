import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './Search';
import {Text, View} from 'react-native';
import {Colors} from '../utils';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

const Fav: React.FC = () => {
  return <Text>Fav</Text>;
};

const History: React.FC = () => {
  return <Text>History</Text>;
};

const Cart: React.FC = () => {
  return <Text>Cart</Text>;
};

const Profile: React.FC = () => {
  return <Text>Profile</Text>;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.Orange,
      }}>
      <Tab.Screen
        name="Favorites"
        component={Fav}
        options={{
          tabBarIcon({focused, size}) {
            return (
              <FontistoIcon
                name="favorite"
                size={size}
                color={focused ? Colors.Orange : '#ccc'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon({focused, size}) {
            return (
              <FontistoIcon
                name="nav-icon-list"
                size={size}
                color={focused ? Colors.Orange : '#ccc'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          tabBarIcon({size}) {
            return (
              <View
                style={{
                  transform: [{translateY: -5}],
                  borderRadius: 30,
                  height: 60,
                  width: 60,
                  backgroundColor: Colors.Orange,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 6,
                }}>
                <FontistoIcon name="search" size={size} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon({focused, size}) {
            return (
              <FontistoIcon
                name="opencart"
                size={size}
                color={focused ? Colors.Orange : '#ccc'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon({focused, size}) {
            return (
              <SimpleLineIcon
                name="user"
                size={size}
                color={focused ? Colors.Orange : '#ccc'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
