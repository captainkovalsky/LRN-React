// ./static-server.js 
var server = require('node-simple-static-server');
var options = {
   port: 3333,
   gzip: true,
   logs: false,
   loge: true,
   dir: './dist'
};

server.run( options );