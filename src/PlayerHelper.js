
function createPlayer(id){
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

const PlayerHelper = {createPlayer};

export default PlayerHelper;
