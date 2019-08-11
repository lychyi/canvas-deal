import { Game } from 'boardgame.io/core';
import Logic from './Logic';

export const CanvasDeal = Game({
  setup: Logic.setup,

  moves: {
    drawCard: Logic.drawCard,
    playMoney: Logic.playMoney,
    playAction: Logic.playAction,
    playProperty: Logic.playProperty,
    discardCard: Logic.discardCard,
    flipWild: Logic.flipWild,
    movePropertyCard: Logic.movePropertyCard,
  },
  flow: {
    onTurnBegin: Logic.startTurn
  }

  // playerView: () => ({ /* what the player sees */ }),
});
