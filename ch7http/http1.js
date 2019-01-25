
let http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello");
    res.end();

});

server.listen(3000);

const keepAliveAgent = new http.Agent({
    keepAlive: true,
    maxScokets: 2,
    maxFreeSockets: 1
});

http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/',
    agent: keepAliveAgent
}, (res) => {
    console.log(res instanceof http.IncomingMessage); //true
    console.log(res instanceof http.ServerResponse); //false
    //console.log(res);
    console.log(res.statusCode); //200
    console.log(res.headers);  //
/*{ 'content-type': 'text/plain',
    date: 'Fri, 25 Jan 2019 01:58:38 GMT',
    connection: 'keep-alive',
    'transfer-encoding': 'chunked' }*/

});