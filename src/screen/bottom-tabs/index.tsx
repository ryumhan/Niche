import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './home';
import Tatics from './tatics';
import Details from './detail';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tatics" component={Tatics} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
