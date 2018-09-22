const http = require("1http");
const querystring = require("querystring");
http.createServer(function(req,res){
	console.log(querystring.parse(req.url));
	/*
	
	{ '/1.html?name': 'qq', age: '22' }
    */
	
}).listen(8888);