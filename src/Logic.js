import SeedDeck from './SeedDeck';
import PlayerHelper from './PlayerHelper';
import DeckHelper from './DeckHelper';
import HandHelper from './HandHelper';

function setup() {
  let deck = SeedDeck.run();
  let players = {};
  let playedPile = [];
  players['0'] = PlayerHelper.createPlayer(0);

  players['1'] = PlayerHelper.createPlayer(1);


  Object.values(players).forEach(player => {DeckHelper.initialDraw(player,5,deck)});

  return {deck, players, playedPile};
}

function drawCard(player, currentState) {
  DeckHelper.drawCards(player, 1, currentState);
}

function playMoneyCard(player, card) {
  HandHelper.removeCardFromHand(player, card);
  HandHelper.putCardInBank(player, card);
  HandHelper.updateBankValue(player);
}

function playActionCard(player, card, zone) {

}

function playPropertyCard(card) {

}

function playWildCard(card, zone) {

}

function discardCard(card) {

}

function flipWild(card) {

}

function movePropertyCard(card) {

}

function startTurn(currentState, ctx) {

  let player = currentState.players[ctx.currentPlayer];

  if (player.hand.length === 0){
      DeckHelper.drawCards(player, 5, currentState);
  }

  DeckHelper.drawCards(player, 2, currentState);

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
