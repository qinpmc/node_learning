/*
基础版文件服务器
 */


const url = require("url");
const http = require("http");
var path = require("path");
var fs = require("fs");

var root = __dirname;

http.createServer(function(req,res){
	var urlPath = url.parse(req.url);
	var filepath = path.join(root,urlPath.pathname);

	if(urlPath.pathname != '/favicon.ico'){
		var stream = fs.createReadStream(filepath);
		stream.on("data",function(chunk){
			res.write(chunk);
		})
		stream.on("end",function(){
			res.end();
		})
	}

}).listen(8888);
