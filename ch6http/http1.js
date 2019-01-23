
let http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello");
    res.end();

});

server.listen(3000);

const keepAliveAgent = new http.Agent({
    keepAlive: true,
    maxScokets: 10,
    maxFreeSockets: 5
});

http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/',
    agent: keepAliveAgent
}, (res) => {
    console.log(res instanceof http.IncomingMessage); //true
    console.log(res instanceof http.ServerResponse); //false
    console.log(res);
console.log(res.statusCode);
console.log(res.headers);
});