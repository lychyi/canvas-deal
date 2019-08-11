
const createPlayer = (id) => {
  return {
    id,
    name: "player_"+id,
    hand:[],
    field:[],
    money:[],
    bank:[],
    bankValue:0,
  }
}

const getCurrentPlayer = (gameState, ctx) => {
  return gameState.players[ctx.currentPlayer];
};
const PlayerHelper = {createPlayer, getCurrentPlayer};

export default PlayerHelper;
