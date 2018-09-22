const url = require("url");
const http = require("1http");

http.createServer(function(req,res){
	//访问地址：http://localhost:8888/1.html?name=qq&age=22#middle
	console.log(req);
	
	console.log("***************************");
	
	console.log(url.parse(req.url));
	/*
	***************************
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
  href: '/1.html?name=qq&age=22' }
  */

	
}).listen(8888,function(){
	console.log("listening on port 8888");
})
 
 
 
/*
 

*/
