import React from 'react';
import {Image} from 'react-native';

const Opening = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('bottomtab');
  }, 500);
  return <Image source={require('../../../image/emblem.jpeg')} />;
};

export default Opening;
