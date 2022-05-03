import React from 'react';
import Draggable from 'react-native-draggable';

interface IplayerProps {
  posX: number;
  posY: number;
  image?: number;
}

const Ball = ({posX, posY}: IplayerProps) => {
  const image = require('../../../image/ball.png');
  return (
    <Draggable
      x={posX ? posX : 200}
      y={posY ? posY : 200}
      renderSize={18}
      isCircle
      imageSource={image}
    />
  );
};

export default Ball;
