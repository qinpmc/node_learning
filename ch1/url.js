const url = require("url");

var str = "http://localhost:8888/1.html?name=qq&age=22#middle";

console.log(url.parse(str,true)); //加上true，可把 query 参数解析为对象
console.log("*****************");
console.log(url.parse(str));

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8888',
  port: '8888',
  hostname: 'localhost',
  hash: '#middle',
  search: '?name=qq&age=22',
  query: { name: 'qq', age: '22' },
  pathname: '/1.html',
  path: '/1.html?name=qq&age=22',
  href: 'http://localhost:8888/1.html?name=qq&age=22#middle' }
*****************
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8888',
  port: '8888',
  hostname: 'localhost',
  hash: '#middle',
  search: '?name=qq&age=22',
  query: 'name=qq&age=22',
  pathname: '/1.html',
  path: '/1.html?name=qq&age=22',
  href: 'http://localhost:8888/1.html?name=qq&age=22#middle' }

*/
