import { Game } from 'boardgame.io/core';
import SeedDeck from './seedDeck';

export const CanvasDeal = Game({
  setup: () => ({ deck: SeedDeck.run() }),

  moves: {
    // draw card/s & draw 5
    // play money card
    // play action card
    // play property card
    // discard card
    // flip wild card
    // move property cards
  },
  flow: {},
  // playerView: () => ({ /* what the player sees */ }),
});
