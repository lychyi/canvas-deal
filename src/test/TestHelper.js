const createMockDeck = (size, startIdAt) => {
  let deck = [];
  for (let i=0; i<size; i++) {
    deck.push({id:startIdAt});
    startIdAt = startIdAt+1;
  }
  return deck;
}

export default {createMockDeck};
