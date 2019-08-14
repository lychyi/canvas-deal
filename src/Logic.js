import SeedDeck from './SeedDeck';
import FieldHelper from './FieldHelper'
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

const playMoneyCard = (gameState, ctx, cardId)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  let card = HandHelper.removeCardFromHand(player, cardId);
  HandHelper.putCardInBank(player, card);
  HandHelper.updateBankValue(player);
}

const playActionCard = (gameState, ctx, cardId)  => {

}

const playPropertyCard = (gameState, ctx, cardId)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  let card = HandHelper.removeCardFromHand(player, cardId);
  FieldHelper.addPropertyToField(player, card);
}

const playBuildingCard = (gameState, ctx, cardId, colorSet)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  HandHelper.removeCardFromHand(player, cardId);


}

const playWildCard = (gameState, ctx, cardId, color)  => {

}

const discardCard = (gameState, ctx, cardId)  => {
  let player = PlayerHelper.getCurrentPlayer(gameState,ctx);

  let card = HandHelper.removeCardFromHand(player, cardId);
  DeckHelper.addCardToPlayedPile(card, gameState.playedPile);
}

const flipWild = (gameState, ctx, cardId)  => {

}

const movePropertyCard = (gameState, ctx, cardId)  => {

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
