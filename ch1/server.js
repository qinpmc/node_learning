var http = require("http");
var url = require("url");
http.createServer(function(req,res){
	console.log(req.url); //∑√Œ  localhost:8888/1.html; ‰≥ˆ 1.html
	console.log(url.parse(req.url));
	/*
	Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=qq&age=22',
  query: 'name=qq&age=22',
  pathname: '/1.html',
  path: '/1.html?name=qq&age=22',
  href: '/1.html?name=qq&age=22' } */3


	
}).listen(8888);