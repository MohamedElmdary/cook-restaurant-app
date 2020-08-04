import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* pages */
// import Welcome from './pages/Welcome';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Verification from './pages/Verification';
// import Search from './pages/Search';
import Restaurant from './pages/Restaurant';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Restaurant"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
