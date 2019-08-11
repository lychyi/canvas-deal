
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
      if (deck.length === 0){
          deck = restockDeckFromPlayedPile(gameState);
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

  return gameState.deck;
}

const addCardToPlayedPile = (card, playedPile) => {
  playedPile.push(card);
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
                    addCardToPlayedPile,
                    shuffle};

export default DeckHelper;
