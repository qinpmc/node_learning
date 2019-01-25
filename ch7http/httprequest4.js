var querystring = require("querystring");
var http  = require("http");

// 创建 http 服务器
var server = new http.Server();
server.on("request",function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var content = "";

    req.on('data', function (chunk) {
        content += chunk;
    });
    res.write("客户端发送的数据原样返回："+content);
    res.end();
});
server.listen(3000);

///////////////////////////////////
var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method:'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

// 创建 http.ClientRequest 请求
var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

});

req.on('response', function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('收到数据：%s', chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();
//console.log(req);