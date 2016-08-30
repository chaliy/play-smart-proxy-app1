'use strict';

let http = require('http');
let serveStatic = require('serve-static');
let app = require('connect')();

app.use(serveStatic(__dirname + '/dist'));

// Host
let port = process.env.PORT || 10030;

http.createServer(app).listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
