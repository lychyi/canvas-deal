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

    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'red'});
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'yellow'});
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'yellow'});
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'red'});
    FieldHelper.addPropertyToField(player, {id:2,propertyCard:true, color:'green'});

    let redSet = FieldHelper.getColorSetFromField(player,'red');
    let yellowSet = FieldHelper.getColorSetFromField(player,'yellow');
    let greenSet = FieldHelper.getColorSetFromField(player,'green');

    expect(player.field.length).toEqual(3);
    expect(redSet.properties.length).toEqual(2);
    expect(greenSet.properties.length).toEqual(1);
    expect(yellowSet.properties.length).toEqual(2);

  });


});
