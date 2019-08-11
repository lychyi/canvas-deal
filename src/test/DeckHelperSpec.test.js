import PlayerHelper from '../PlayerHelper';
import DeckHelper from '../DeckHelper';

const createMockDeck = (size, startIdAt) => {
  let deck = [];
  for (let i=0; i<size; i++) {
    deck.push({id:startIdAt});
    startIdAt = startIdAt+1;
  }
  return deck;
}

describe('Initial Dealing Cards', () => {
  it('removes initial dealt cards from deck', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = createMockDeck(20, 0);

    DeckHelper.initialDraw(player, 5, deck);

    expect(deck.length).toEqual(15);

  });

  it('adds the cards from deck to the players hand', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = createMockDeck(20);

    DeckHelper.initialDraw(player, 5, deck);

    expect(player.hand.length).toEqual(5);

  });

});

describe('Drawing Cards', () => {
  let playedPile = createMockDeck(4, 100);

  it('draws cards and adds them to the players hand', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = createMockDeck(20, 0);

    let cardsDrawn = DeckHelper.drawCards(player, 2, {deck, playedPile});

    expect(player.hand.length).toEqual(2);
    expect(player.hand).toEqual(jasmine.arrayContaining(cardsDrawn));

  });

  it('draws cards and removes them from the deck', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = createMockDeck(20, 0);

    let cardsDrawn = DeckHelper.drawCards(player, 2, {deck, playedPile});

    expect(deck.length).toEqual(18);
    expect(deck).not.toEqual(jasmine.arrayContaining(cardsDrawn));
  });

  it('draws cards and restocks the deck when there are no cards', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = [];

    let gs = {deck, playedPile};

    let cardsDrawn = DeckHelper.drawCards(player, 2, gs);

    expect(gs.deck.length).toEqual(2);
    expect(gs.deck).not.toEqual(jasmine.arrayContaining(cardsDrawn));
    expect(gs.playedPile.length).toEqual(0);

  });

  it('draws 2 cards and restocks the deck when there is 1 card left in the deck', () => {
    let player = PlayerHelper.createPlayer(0);
    let deck = createMockDeck(1, 0);
    playedPile = createMockDeck(4, 100);

    let gs = {deck, playedPile};

    let cardsDrawn = DeckHelper.drawCards(player, 2, gs);

    expect(gs.deck.length).toEqual(3);
    expect(gs.deck).not.toEqual(jasmine.arrayContaining(cardsDrawn));
    expect(gs.playedPile.length).toEqual(0);
  });

});
