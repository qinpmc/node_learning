/*
  输入流pipe到输出流
  error 监听处理
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
		stream.pipe(res);

		stream.on("error",function(){
			res.statusCode = 500;
			res.end("Internal Server Error");
		})
	}

}).listen(8888);
