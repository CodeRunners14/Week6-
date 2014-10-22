var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', Number(process.argv[2] || 8080));
 
server.start(function() {
    console.log("Hapikserver started @", server.info.uri);
});