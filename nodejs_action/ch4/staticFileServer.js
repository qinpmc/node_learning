
const url = require("url");
const http = require("http");
var path = require("path");
var fs = require("fs");

var root = __dirname;

http.createServer(function(req,res){
	var urlPath = url.parse(req.url);
	var filepath = path.join(root,urlPath.pathname);
	console.log(root);
	console.log(filepath);

}).listen(8888);
