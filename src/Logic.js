import SeedDeck from './seedDeck';
import PlayerHelper from './PlayerHelper';
import DeckHelper from './DeckHelper';

function setup() {
  let deck = SeedDeck.run();
  let players = [];
  players.push(PlayerHelper.createPlayer(0));
  players.push(PlayerHelper.createPlayer(1));


  players.forEach( player => (player.hand = DeckHelper.drawCards(deck,5)));

  return {deck, players};
}

function drawCard() {

}

function playMoney() {

}

function playAction() {

}

function playProperty() {

}

function discardCard() {

}

function flipWild() {

}

function movePropertyCard() {

}

function startTurn(currentState, ctx) {
  //currentState.players[this.ctx.currentPlayer];
}

const Logic = {
    setup,
    drawCard,
    playMoney,
    playAction,
    playProperty,
    discardCard,
    flipWild,
    movePropertyCard,
    startTurn
};

export default Logic;
