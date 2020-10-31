const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const { info } = require('console');


const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./socktes/socket')
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});