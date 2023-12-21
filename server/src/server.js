const express = require('express');
const server = express();
const routers = require('./routes/routes')

server.use(express.json());
server.use('/', routers);

module.exports = server;