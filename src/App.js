import React from 'react';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './ui/board';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: { local: true },
});

const App = () => (
  <div>
    <h1>Player 0</h1>
    <TicTacToeClient playerID="0" />
    <h1>Player 1</h1>
    <TicTacToeClient playerID="1" />
  </div>
);

export default App;