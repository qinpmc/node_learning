
let http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello");
    res.end();

});

server.listen(3000);

const agent = new http.Agent({
    keepAlive: true,
    maxScokets: 10,
    maxFreeSockets: 5
});

http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/',
    agent: agent
}, (res) => {
    console.log(agent.freeSockets); //
    console.log(agent.maxFreeSocket); //
    console.log(agent.maxSockets);   //
    console.log(agent.requests); //

});
