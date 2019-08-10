const Server = require('boardgame.io/server').Server;
const CanvasDeal = require('./game').CanvasDeal;
const server = Server({ games: [CanvasDeal] });
server.run(8000);