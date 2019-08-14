const addPropertyToField = (player, card) => {
  if (!card.propertyCard) {
    throw Error('Cannot put this card on the field');
  }


  addCardToPlayerSet(player, card, card.color);
  // !TODO - JP verify if a set is complete....
}

const addBuildingToField = () => {

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
                     getColorSetFromField,
                     createFieldSet,
                     getColorSetFromField,
                    };

export default FieldHelper;
