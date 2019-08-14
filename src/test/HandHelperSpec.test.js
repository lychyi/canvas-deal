import HandHelper from '../HandHelper';
import PlayerHelper from '../PlayerHelper';
import TestHelper from './TestHelper';

describe('Cards in Hand', () => {
  let player = PlayerHelper.createPlayer(0);
  it('Removes a card from players hand', () => {
    player.hand = TestHelper.createMockDeck(5,0);

    let card = HandHelper.removeCardFromHand(player,3);

    expect(player.hand.length).toEqual(4);
    expect(player.hand).not.toEqual(jasmine.arrayContaining([card]));
    expect(card.id).toEqual(3);
  });

  it('Fails to removes a card from players hand when it does not exist', () => {
    player.hand = TestHelper.createMockDeck(5,0);

    HandHelper.removeCardFromHand(player,10);

    expect(player.hand.length).toEqual(5);

  });

  it('Removes multiple cards from a players hand', () => {
    player.hand = TestHelper.createMockDeck(10,0);

    let c1 = HandHelper.removeCardFromHand(player, player.hand[0].id);
    let c2 = HandHelper.removeCardFromHand(player,1);
    let c3 = HandHelper.removeCardFromHand(player,3);

    expect(player.hand.length).toEqual(7);
    expect(player.hand).not.toEqual(jasmine.arrayContaining([c1,c2,c3]));
  });
});

describe('Banking Cards', () => {
  let player = PlayerHelper.createPlayer(0);

  it('Adds a card into the players bank', () => {
    let card = {name:"New Card", moneyCard: true};

    HandHelper.putCardInBank(player,card);

    expect(player.bank).toEqual(jasmine.arrayContaining([card]));
  });

  it('Does not add a property card to the bank', () => {
    let card = {name:"New Card", propertyCard: true};

    try {
      HandHelper.putCardInBank(player,card);
    }catch (e) {
      expect(player.bank).not.toEqual(jasmine.arrayContaining([card]));
    }
  });

  it ('Updates player bank value', () => {
    player.bank = [{value:4},{value:3},{value:9},{value:3}];
    HandHelper.updateBankValue(player);

    expect(player.bankValue).toEqual(19);
  });
});
