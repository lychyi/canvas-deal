import DeckHelper from './DeckHelper';

const passGo = (player, gameState) => {
  DeckHelper.drawCards(player, 2, gameState);
}

const slyDeal = () => {

}






const ActionHelper = {passGo,
                      };

export default ActionHelper;
