import PlayerHelper from '../PlayerHelper';
import FieldHelper from '../FieldHelper';
import TestHelper from './TestHelper';

describe('Add property to the field', () => {
  it('Add a property to a brand new player field', () => {

    let player = PlayerHelper.createPlayer(0);

    let card = {id:0,propertyCard:true, color:'red'};

    FieldHelper.addPropertyToField(player, card);

    expect(player.field.length).toEqual(1);
    expect(player.field[0].color).toEqual('red');
    expect(player.field[0].properties).toEqual(jasmine.arrayContaining([card]));

  });

  it('Cannot Add a property to a complete set, new set created', () => {

    let player = PlayerHelper.createPlayer(0);
    player.field.push(FieldHelper.createFieldSet('red'));
    player.field[0].complete = true;

    let newCard = {id:2,propertyCard:true, color:'red'};
    FieldHelper.addPropertyToField(player, newCard);

    expect(player.field.length).toEqual(2);
  });

  it('Add a property to a an existing card set in the field', () => {

    let player = PlayerHelper.createPlayer(0);
    player.field.push(FieldHelper.createFieldSet('red'));
    player.field[0].properties.push({id:0,propertyCard:true, color:'red'});

    let newCard = {id:2,propertyCard:true, color:'red'};
    FieldHelper.addPropertyToField(player, newCard);

    expect(player.field[0].color).toEqual('red');
    expect(player.field[0].properties).toEqual(jasmine.arrayContaining([newCard]));
    expect(player.field[0].properties.length).toEqual(2);
  });


  it('Add a property to a an new cards of different colors to set in the field with existing sets', () => {
    let player = PlayerHelper.createPlayer(0);

    FieldHelper.addPropertyToField(player, {id:0,propertyCard:true, color:'red'});
    FieldHelper.addPropertyToField(player, {id:1,propertyCard:true, color:'yellow'});
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'yellow'});
    FieldHelper.addPropertyToField(player, {id:3,propertyCard:true, color:'red'});
    FieldHelper.addPropertyToField(player, {id:4,propertyCard:true, color:'green'});

    let redSet = FieldHelper.getColorSetFromField(player, 'red');
    let yellowSet = FieldHelper.getColorSetFromField(player, 'yellow');
    let greenSet = FieldHelper.getColorSetFromField(player, 'green');

    expect(player.field.length).toEqual(3);
    expect(redSet.properties.length).toEqual(2);
    expect(greenSet.properties.length).toEqual(1);
    expect(yellowSet.properties.length).toEqual(2);

  });

  it('Adds a wild card to a set', () => {
    let player = PlayerHelper.createPlayer(0);
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'red'});

    let wildCard = {id:3,wildCard:true, color:'red,yellow'};
    FieldHelper.addWildToField(player, wildCard, 'red');

    let redSet = FieldHelper.getColorSetFromField(player,'red');

    expect(redSet.properties.length).toEqual(2);
    expect(redSet.properties).toEqual(jasmine.arrayContaining([wildCard]));


  });

  it('Cannot add blue wild card to a red set', () => {
    let player = PlayerHelper.createPlayer(0);
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'red'});

    let wildCard = {id:3,wildCard:true, color:'blue,yellow'};
    try{
      FieldHelper.addWildToField(player, wildCard, 'red');
    }catch (e) {
      expect(e);
    }

    let redSet = FieldHelper.getColorSetFromField(player,'red');

    expect(redSet.properties.length).toEqual(1);
    expect(redSet.properties).not.toEqual(jasmine.arrayContaining([wildCard]));

  });

  it('Adds a card to a set and have it complete', () => {
    let player = PlayerHelper.createPlayer(0);
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'red'});
    FieldHelper.addPropertyToField(player, {id:3,propertyCard:true, color:'red'});

    FieldHelper.addPropertyToField(player, {id:1,propertyCard:true, color:'red'});

    let redSet = FieldHelper.getColorSetFromField(player,'red');

    expect(redSet.complete).toBeTruthy();

  });

});

describe('Play all cards to the field', () => {
  it('Add four properties, two wilds and a building', () => {
      let player = PlayerHelper.createPlayer(0),
          wildCard1 = {id:0,wildCard:true, color:'red,yellow'},
          prop1 = {id:1,propertyCard:true, color:'red'},
          prop2 = {id:2,propertyCard:true, color:'red'},
          prop3 = {id:3,propertyCard:true, color:'green'},
          prop4 = {id:4,propertyCard:true, color:'yellow'},
          wildCard2 = {id:0,wildCard:true, color:'black,green'},
          building = {id:5,buildingCard:true};

      FieldHelper.addPropertyToField(player, prop1);
      FieldHelper.addWildToField(player, wildCard1, 'red');
      FieldHelper.addPropertyToField(player, prop2);
      FieldHelper.addPropertyToField(player, prop3);
      FieldHelper.addPropertyToField(player, prop4);
      FieldHelper.addWildToField(player, wildCard2, 'green');

      let redSet = FieldHelper.getColorSetFromField(player,'red');

      FieldHelper.addBuildingToField(player, building, redSet.id);

      expect(redSet.properties.length).toEqual(3);
      expect(redSet.complete).toBeTruthy();
      expect(redSet.building).toEqual(building);
      expect(player.field.length).toEqual(3);


  });

});
