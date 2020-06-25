import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterPhysical from '../pages/Register/RegisterPhysical';
import RegisterTel from '../pages/Register/Tel';

const StackNavigaton = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <StackNavigaton.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigaton.Screen name="Main" component={Main} />
      <StackNavigaton.Screen name="Login" component={Login} />
      <StackNavigaton.Screen name="Register" component={Register} />
      <StackNavigaton.Screen
        name="Register-physical"
        component={RegisterPhysical}
      />
      <StackNavigaton.Screen
        name="Register-physical-number"
        component={RegisterTel}
      />
    </StackNavigaton.Navigator>
  );
};

export default AuthRoutes;
