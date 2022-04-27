import React from 'react';
import Draggable from 'react-native-draggable';

interface IplayerProps {
  posX: number;
  posY: number;
  size: number;
  image?: number;
}

const Player = ({posX, posY, size}: IplayerProps) => {
  return (
    <Draggable
      x={posX ? posX : 200}
      y={posY ? posY : 200}
      renderSize={size ? size : 40}
      renderColor="black"
      renderText="A"
      isCircle
    />
  );
};

export default Player;
