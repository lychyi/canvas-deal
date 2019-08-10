
function drawCards(deck,quantity){
  let draw = [];
  for (let i=0; i < quantity; i++){
    draw.push(deck.shift());
  }
  return draw;
}

const DeckHelper = {drawCards};

export default DeckHelper;
