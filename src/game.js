import { Game } from 'boardgame.io/core';
import Logic from './logic';

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
    clickCell: Logic.clickCell,
  },
  flow: {onTurn: Logic.startTurn},
  // playerView: () => ({ /* what the player sees */ }),
});
