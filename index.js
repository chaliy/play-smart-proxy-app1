'use strict';

let http = require('http');
let serveStatic = require('serve-static');
let app = require('connect')();

app.use(serveStatic(`${__dirname}/public`));

// Host
let port = process.env.PORT || 10030;

http.createServer(app).listen(port, () => {
  console.log(`App1 server listening on port ${port}`);
});
