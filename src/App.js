import React from 'react';
import { Client } from 'boardgame.io/react';
import { CanvasDeal } from './game';
import { CanvasDealBoard } from './ui/Board';

const CanvasDealClient = Client({
  game: CanvasDeal,
  board: CanvasDealBoard,
  multiplayer: { server: 'localhost:8000' },
});

const App = () => (
  <CanvasDealClient playerID="0" />
);

export default App;