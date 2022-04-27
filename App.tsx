import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

import Opening from './src/screen/opening';
import BottomTabs from './src/screen/bottom-tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); /** 추가 **/
      }, 2000); /** 스플래시 시간 조절 (2초) **/
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="intro"
            component={Opening}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomtab"
            component={BottomTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
