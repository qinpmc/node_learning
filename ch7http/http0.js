var http = require('http');
var url = require('url');
var util = require('util');

/*
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    var res1 = req instanceof http.IncomingMessage;
    var res2 = res instanceof http.ServerResponse;

    console.log("req instanceof http.IncomingMessag: "+ (req instanceof http.IncomingMessage));  //true
    console.log("res instanceof http.ServerResponse: "+ (res instanceof http.ServerResponse));  //true

    res.write("Hello");
    res.end();

})
console.log(server instanceof http.Server );  //true
server.listen(3000);
*/


// 和上文完全等效
var server = new http.Server();

server.on("request",function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    var res1 = req instanceof http.IncomingMessage;
    var res2 = res instanceof http.ServerResponse;

    console.log("req instanceof http.IncomingMessag: "+ (req instanceof http.IncomingMessage));  //true
    console.log("res instanceof http.ServerResponse: "+ (res instanceof http.ServerResponse));  //true

    res.write("Hello");
    res.end();
});

console.log(server instanceof http.Server );  //true
server.listen(3000);