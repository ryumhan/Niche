import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './home';
import Tactics from './tactics';
import Details from './detail';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Tactics"
        component={Tactics}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
