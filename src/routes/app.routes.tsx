import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Maps from '../pages/Maps';

const BottomTab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Feed" component={Feed} />
      <BottomTab.Screen name="Maps" component={Maps} />
    </BottomTab.Navigator>
  );
};

export default AppRoutes;
