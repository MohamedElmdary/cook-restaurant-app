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
import BottomTab from './pages/BottomTab';
import OrderPreview from './pages/OrderPreview';
import OrderShipping from './pages/OrderShipping';
import OrderPayment from './pages/OrderPayment';
import OrderComplete from './pages/OrderComplete';
import Favorites from './pages/Favorites';
import History from './pages/History';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="History"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="OrderPreview" component={OrderPreview} />
        <Stack.Screen name="OrderShipping" component={OrderShipping} />
        <Stack.Screen name="OrderPayment" component={OrderPayment} />
        <Stack.Screen name="OrderComplete" component={OrderComplete} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
