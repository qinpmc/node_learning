var net = require("net");
var server = net.createServer(function(socket){
 socket.on("data",function(data){
 console.log(data);
 //socket.write(data.toString());
     socket.write(data);
 })
 }).listen(8888);

/*
const net = require('net');// 2 创建服务器
let clientArr = [];
const server = net.createServer();
// 3 绑定链接事件
server.on('connection', (person) => {
    console.log(clientArr.length);
// 记录链接的进程
person.id = clientArr.length;
clientArr.push(person);
person.setEncoding('utf8');
// 客户socket进程绑定事件
person.on('data', (chunk) => {
    console.log(chunk);
console.log("------"+clientArr.length);
clientArr.forEach((person) => {
    // 数据写入全部客户进程中
    person.write(chunk);
})
;
})
})
server.listen(800);*/


/*
const net = require('net');
const server = net.createServer((c) => {
        // 'connection' listener
        console.log('client connected');
c.on('end', () => {
    console.log('client disconnected');
});
c.write('hello\r\n');
c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(8124, () => {
    console.log('server bound');
});*/
