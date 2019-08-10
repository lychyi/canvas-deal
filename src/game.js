import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import { TicTacToeBoard } from './ui';

const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      G.cells[id] = ctx.currentPlayer;
    },
  },
});

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: { local: true }
});

export default App;