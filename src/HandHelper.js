const putCardInBank = (player, card) => {
  if (card.moneyCard || card.actionCard) {
    player.bank.push(card);
  }else{
    throw Error('Cannot put this card in the bank');
  }
}

const updateBankValue = (player) =>{
  var value = 0;
  player.bank.forEach(card =>{
    value += card.value;
  });
  player.bankValue = value;
}

const removeCardFromHand = (player, cardId) => {
  let card;
  player.hand = player.hand.filter(handCard => {
    if (cardId === handCard.id){
      card = handCard;
      return false;
    }
    return true;
  });

  if (card === undefined){
    throw Error("Card cannot be found in players hand");
  }

  return card;
}

const HandHelper = {putCardInBank,
                    removeCardFromHand,
                    updateBankValue,
                    };

export default HandHelper;
