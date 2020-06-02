import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from '../pages/Feed';
import Maps from '../pages/Maps';
import Talk from '../pages/Talk';

import DrawerContent from '../utils/DrawerContent';
import Appbar from '../utils/Appbar';

const DrawerNavigator = createDrawerNavigator();
const TabNavigator = createMaterialBottomTabNavigator();

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Appbar />

      <TabNavigator.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        sceneAnimationEnabled={false}>
        <TabNavigator.Screen
          name="Notícias"
          component={Feed}
          options={{
            tabBarIcon: 'rss',
          }}
        />
        <TabNavigator.Screen
          name="Conversas"
          component={Talk}
          options={{
            tabBarIcon: 'chat',
          }}
        />
        <TabNavigator.Screen
          name="Mapa"
          component={Maps}
          options={{
            tabBarIcon: 'map',
          }}
        />
        <TabNavigator.Screen
          name="Nop"
          component={Feed}
          options={{
            tabBarIcon: 'not',
          }}
        />
      </TabNavigator.Navigator>
    </React.Fragment>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  );
};

export default AppRoutes;
