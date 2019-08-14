const addPropertyToField = (player, card) => {
  if (!card.propertyCard) {
    // !TODO - JP should errors live on the helper or on in the logic?
    throw Error('Cannot put this card on the field');
  }
  addCardToPlayerSet(player, card, card.color);
    // !TODO - JP verify if a set is complete....
}

const addBuildingToField = () => {

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
}

const addCardToPlayerSet = (player, card, color) => {
  let colorSet = getColorSetFromField(player, color);

  if (colorSet == undefined){
    colorSet = createFieldSet(color);
    player.field.push(colorSet);
  }

  colorSet.properties.push(card);

}

const getColorSetFromField = (player, color) => {
  let colorSet;

  player.field.forEach(setItem => {
    if (setItem.color === color && !setItem.complete){
      colorSet = setItem;
    }
  });

  return colorSet;
}

const createFieldSet = (color) => {
  return {
      properties:[],
      building: undefined,
      color: color,
      complete: false,
  }
}

const FieldHelper = {addPropertyToField,
                     addWildToField,
                     getColorSetFromField,
                     createFieldSet,
                     getColorSetFromField,
                    };

export default FieldHelper;
