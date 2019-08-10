import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      G.cells[id] = ctx.currentPlayer;
    },
  },
});

const App = Client({ game: TicTacToe });

export default App;