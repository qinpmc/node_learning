var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if( pathname=="/"){  //请求地址： http://localhost:8888
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.readFile("index.html","utf-8",function(err,data){
            res.write(data);
            res.end();
        })
    }else{
        res.setHeader("Content-Type",mime.lookup(url)+";charset=utf-8");
        fs.readFile(pathname.slice(1),"utf-8",function(err,data){
            res.write(data);
            res.end();
        })
    }

}).listen(8888);