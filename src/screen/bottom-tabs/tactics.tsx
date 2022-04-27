import React from 'react';
import {View, Text} from 'react-native';
import Ball from '../../components/tactics/Ball';
import Ground from '../../components/tactics/Ground';
import Player from '../../components/tactics/Player';

const Tactics = () => {
  return (
    <View>
      <Ground />
      <Player />
      <Ball />
    </View>
  );
};

export default Tactics;
