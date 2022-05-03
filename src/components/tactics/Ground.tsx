import React from 'react';
import {ImageBackground} from 'react-native';

const Ground = () => {
  const image = require('../../../image/ground.png');
  return (
    <ImageBackground
      source={image}
      resizeMode={'stretch'}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default Ground;
