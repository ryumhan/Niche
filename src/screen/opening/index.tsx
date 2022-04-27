import React from 'react';
import {Alert, Image} from 'react-native';

const Opening = ({navigation}: any) => {
  Alert.alert('hello');
  setTimeout(() => {
    navigation.navigate('bottomtab');
  }, 500);
  return <Image source={require('../../../image/emblem.jpeg')} />;
};

export default Opening;
