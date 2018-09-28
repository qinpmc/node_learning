/*
 fs的stat 处理
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
	fs.stat(filepath,function(err,stat){
		if(err){
			if("ENOENT" ==err.code){
				res.statusCode = 404;
				res.end("not found");
			}else{
				res.statusCode = 500;
				res.end("Internal Server  Error");
			}
		}else{
			res.setHeader("Content-Length",stat.size);  //stat.size 为字节长度
			console.log(stat);
			var stream = fs.createReadStream(filepath);
			stream.pipe(res);
			stream.on("error",function(err){
				res.statusCode = 500;
				res.end("Internal Server  Error");
			})
		}
	})
}).listen(8888);
