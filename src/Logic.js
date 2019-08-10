import SeedDeck from './seedDeck';

function setup() {
  return {deck: SeedDeck.run() };
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

function startTurn() {

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
