
const initialDraw = (player, quantity, deck) => {
  let i = 0;
  for (i; i < quantity; i++){
    drawNextCard(deck,player);
  }
}

const drawCards = (player, quantity, gameState) => {
    let cardsDrawn = [];
    let deck = gameState.deck;

    for (let i=0; i < quantity; i++){
      let card = {};
      if (deck.length === 0){
          restockDeckFromPlayedPile(deck, gameState.playedPile)
      }

      cardsDrawn.push(drawNextCard(deck,player));
    }

    return cardsDrawn;

}

const drawNextCard = (deck, player) => {
  let card = deck.shift();
  player.hand.push(card);
  return card;
}

const restockDeckFromPlayedPile = (gameState) => {
  gameState.deck = shuffle(gameState.playedPile);
  gameState.playedPile = [];
}

// https://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const DeckHelper = {initialDraw,
                    drawCards,
                    restockDeckFromPlayedPile,
                    shuffle};

export default DeckHelper;
