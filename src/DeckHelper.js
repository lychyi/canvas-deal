
function drawCards(player, deck,quantity){
  for (let i=0; i < quantity; i++){
    player.hand.push(deck.shift());
  }
}

const DeckHelper = {drawCards};

export default DeckHelper;
