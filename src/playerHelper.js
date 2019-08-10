
function createPlayer(id){
  return {
    id,
    name: "player_"+id,
    hand:{},
    field:{},
    money:{}
  }
}

const PlayerHelper = {createPlayer};

export default PlayerHelper;
