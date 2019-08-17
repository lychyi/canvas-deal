import Rules from './Rules';
import uuidv4 from 'uuid/v4';

const addPropertyToField = (player, card) => {
  if (!card.propertyCard) {
    // !TODO - JP should errors live on the helper or on in the logic?
    throw Error('Cannot put this card on the field');
  }
  addCardToPlayerSet(player, card, card.color);
}

const addBuildingToField = (player, card, colorSetId) => {
  if (!card.buildingCard) {
    throw Error('This card is not a building card');
  }

  let colorSet = getColorSetFromFieldById(player, colorSetId);

  if (colorSet.building != undefined) {
    throw Error('Cannot add building this set already has a property');
  }
  if (!colorSet.complete) {
    throw Error('Cannot add a building to a set that is not complete');
  }

  colorSet.building = card;
}

const addWildToField = (player, card, color) => {
  if (!card.wildCard) {
    throw Error('Cannot put this wild card on the field');
  }

  if (card.color === "all" || card.color.match(color)){
    addCardToPlayerSet(player, card, color);
    return;
  }else{
    throw Error('This wild card cannot be added to this color');
  }

  // !TODO - JP verify if a set is complete....
}

const addCardToPlayerSet = (player, card, color) => {
  let colorSet = getColorSetFromField(player, color);


  if (colorSet === undefined || colorSet.complete){
    colorSet = createFieldSet(color);
    player.field.push(colorSet);
  }

  colorSet.properties.push(card);

  checkIfSetIsCompleteAndUpdate(colorSet);
}

const getColorSetFromField = (player, color) => {
  let colorSet;

  player.field.forEach(setItem => {
    if (setItem.color === color){
      colorSet = setItem;
    }
  });

  return colorSet;
}

const getColorSetFromFieldById = (player, id) => {
  let colorSet;

  player.field.forEach(setItem => {
    if (setItem.id === id){
      colorSet = setItem;
    }
  });

  return colorSet;
}

const createFieldSet = (color) => {
  return {
      id: uuidv4(),
      properties:[],
      building: undefined,
      color: color,
      complete: false,
  }
}

const checkIfSetIsCompleteAndUpdate = (colorSet) => {
  const cardRule = Rules.propertyRules[colorSet.color];

  colorSet.complete = (cardRule.countToComplete === colorSet.properties.length);

}

const FieldHelper = {addPropertyToField,
                     addBuildingToField,
                     addWildToField,
                     getColorSetFromField,
                     createFieldSet,
                     getColorSetFromField,
                    };

export default FieldHelper;
