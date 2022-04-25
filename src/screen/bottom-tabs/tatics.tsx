import React from 'react';
import {View, Text, Alert} from 'react-native';
import Draggable from 'react-native-draggable';

const Tatics = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tatics Menu!!</Text>
      <View>
        <Draggable
          x={75}
          y={100}
          renderSize={56}
          renderColor="black"
          renderText="A"
          isCircle
          shouldReverse
          onShortPressRelease={() => Alert.alert('touched!!')}
        />
        <Draggable x={200} y={300} renderColor="red" renderText="B" />
        <Draggable />
        <Draggable x={50} y={50} />
      </View>
    </View>
  );
};

export default Tatics;
