#!/usr/bin/env node

global.log = require('debug')('webapp:server');

const app = require('../app');
const port = normalizePort(process.env.PORT || '3000');
const server = require('http').createServer(app);

app.set('port', port);

server.listen(port);
server.on('listening', () => log("Application loaded %o", server.address()));

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) return val;
    if (port >= 0) return port;

    return false;
}