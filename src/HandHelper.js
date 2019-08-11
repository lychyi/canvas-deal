function putCardInBank(player, card) {
  if (card.type === 'moneyCard' || card.type === 'actionCard') {
    player.bank.push(card);
  }else{
    throw Error('Cannot put this card in the bank');
  }
}

function updateBankValue(player){
  var value = 0;
  player.bank.forEach(card =>{
    value += card.value;
  });
  player.bankValue = value;
}

function removeCardFromHand(player, card) {
  player.hand = player.hand.filter(handCard => handCard.id !== card.id);
  return card;
}

const HandHelper = {putCardInBank,
                    removeCardFromHand,
                    updateBankValue,
                    };

export default HandHelper;
