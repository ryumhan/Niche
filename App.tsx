import React from 'react';
import {StatusBar, useColorScheme, View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Opening from './src/screen/opening';

// import Opening from './src/screen/opening';

function DetailsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Niche App initial</Text>
      <Button
        title="Go to Emblem!!"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="start" component={DetailsScreen} />
          <Stack.Screen name="Home" component={Opening} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
