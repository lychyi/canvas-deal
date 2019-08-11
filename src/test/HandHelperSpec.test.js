import HandHelper from '../HandHelper';
import PlayerHelper from '../PlayerHelper';
import TestHelper from './TestHelper';

describe('Cards in Hand', () => {
  let player = PlayerHelper.createPlayer(0);
  it('Removes a card from players hand', () => {
    let cardOne = {id:0,name:"New Card"};
    player.hand = [cardOne,{id:1,name:"New Card 2"},{id:2,name:"New Card 3"}];

    HandHelper.removeCardFromHand(player,cardOne);

    expect(player.hand.length).toEqual(2);
    expect(player.hand).not.toEqual(jasmine.arrayContaining([cardOne]));
  });

  it('Removes multiple cards from a players hand', () => {
    player.hand = TestHelper.createMockDeck(10,10);

    let cardOne = player.hand[0];
    HandHelper.removeCardFromHand(player,cardOne);
    cardOne = player.hand[0];
    HandHelper.removeCardFromHand(player,cardOne);
    cardOne = player.hand[0];
    HandHelper.removeCardFromHand(player,cardOne);

    expect(player.hand.length).toEqual(7);
    expect(player.hand).not.toEqual(jasmine.arrayContaining([cardOne]));
  });
});

describe('Banking Cards', () => {
  let player = PlayerHelper.createPlayer(0);

  it('Adds a card into the players bank', () => {
    let card = {name:"New Card", type:"moneyCard"};

    HandHelper.putCardInBank(player,card);

    expect(player.bank).toEqual(jasmine.arrayContaining([card]));
  });

  it('Does not add a property card to the bank', () => {
    let card = {name:"New Card", type:"propertyCard"};

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