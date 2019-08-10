import { Game } from 'boardgame.io/core';

export const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      G.cells[id] = ctx.currentPlayer;
    },
  },
});