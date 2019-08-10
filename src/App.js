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
  <div>
    <h1>Player 0</h1>
    <CanvasDealClient playerID="0" />
    <h1>Player 1</h1>
    <CanvasDealClient playerID="1" />
  </div>
);

export default App;