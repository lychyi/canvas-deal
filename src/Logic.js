import SeedDeck from './seedDeck';
import PlayerHelper from './playerHelper';
import DeckHelper from './deckHelper';

function setup() {

  let cells = Array(9).fill(null);
  let deck = SeedDeck.run();
  let players = [];
  players.push(PlayerHelper.createPlayer(0));
  players.push(PlayerHelper.createPlayer(1));


  players.forEach( player => (player.hand = DeckHelper.drawCards(deck,5)));

  return {cells, deck, players};
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

function clickCell(G, ctx, id) {
  G.cells[id] = ctx.currentPlayer;
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
    clickCell,
    startTurn
};

export default Logic;
