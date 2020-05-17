import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Register2 from '../pages/Register/Register2';

const StackNavigaton = createStackNavigator();

const AuthRoutes = () => {
	return (
		<StackNavigaton.Navigator screenOptions={{ headerShown: false }}>
			<StackNavigaton.Screen name='Main' component={Main} />
			<StackNavigaton.Screen name='Login' component={Login} />
			<StackNavigaton.Screen name='Register' component={Register} />
			<StackNavigaton.Screen name='Register2' component={Register2} />
		</StackNavigaton.Navigator>
	);
};

export default AuthRoutes;
