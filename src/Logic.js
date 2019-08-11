import SeedDeck from './SeedDeck';
import PlayerHelper from './PlayerHelper';
import DeckHelper from './DeckHelper';
import HandHelper from './HandHelper';

const setup = () => {
  let deck = SeedDeck.run();
  let players = {};
  let playedPile = [];

  players['0'] = PlayerHelper.createPlayer(1);
  players['1'] = PlayerHelper.createPlayer(2);

  Object.values(players).forEach(player => {DeckHelper.initialDraw(player,5,deck)});

  return {deck, players, playedPile};
}

const drawCard = (gameState, ctx)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  DeckHelper.drawCards(player, 1, gameState);
}

const playMoneyCard = (gameState, ctx, card)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  HandHelper.removeCardFromHand(player, card);
  HandHelper.putCardInBank(player, card);
  HandHelper.updateBankValue(player);
}

const playActionCard = (gameState, ctx, card, zone)  => {

}

const playPropertyCard = (gameState, ctx, card)  => {

}

const playWildCard = (gameState, ctx, card, zone)  => {

}

const discardCard = (gameState, ctx, card)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  HandHelper.removeCardFromHand(player, card);
  DeckHelper.addCardToPlayedPile(card, gameState.playedPile);
}

const flipWild = (gameState, ctx, card)  => {

}

const movePropertyCard = (gameState, ctx, card)  => {

}

const startTurn = (gameState, ctx)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState, ctx);

  if (player.hand.length === 0){
      DeckHelper.drawCards(player, 5, gameState);
  }

  DeckHelper.drawCards(player, 2, gameState);

}

const Logic = {
    setup,
    drawCard,
    playMoneyCard,
    playActionCard,
    playPropertyCard,
    playWildCard,
    discardCard,
    flipWild,
    movePropertyCard,
    startTurn,
};

export default Logic;
