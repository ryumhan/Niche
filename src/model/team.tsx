export type Team = {
  players: Array<Player>;
  formation: string;
  name: string;
};

type Player = {
  position: Position;
  positionCategory: positionCategory;
  name: string;
  posx: number;
  posy: number;
  img?: string;
};

type positionCategory = 'def' | 'mid' | 'for';

type Position =
  | 'GK'
  | 'CB'
  | 'RB'
  | 'LB'
  | 'MF'
  | 'RM'
  | 'LM'
  | 'LW'
  | 'RW'
  | 'CF';
