var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    //console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.setHeader("myHeader","myValue");
    fs.readFile("response1.html","utf-8",function(err,data){
        res.write(data);
        res.end();
    })


}).listen(8888);