import React from 'react';
import Draggable from 'react-native-draggable';

interface IplayerProps {
  posX: number;
  posY: number;
  image?: number;
}

const Ball = ({posX, posY}: IplayerProps) => {
  return (
    <Draggable
      x={posX ? posX : 200}
      y={posY ? posY : 200}
      renderSize={15}
      renderColor="blue"
      isCircle
    />
  );
};

export default Ball;
