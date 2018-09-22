var http = require("1http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname != '/favicon.ico'){
        if( pathname=="/"){  //请求地址： http://localhost:8888
            res.setHeader("Content-Type","text/html;charset=utf-8");
            fs.readFile("index.html","utf-8",function(err,data){
                res.write(data);
                res.end();
            })
        }else{
            res.setHeader("Content-Type",mime.getType(pathname)+";charset=utf-8"); // mime 2版本 将lookup 改为getType
            console.log(mime.getType(pathname));
            fs.readFile(pathname.slice(1),"utf-8",function(err,data){
                res.write(data);
                res.end();
            })
        }
    }

}).listen(8888);