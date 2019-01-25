const http = require('http');
const net = require('net');
const url = require('url');

// 创建 HTTP 隧道代理。
const proxy = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });
        var start = new Date().getTime();
        res.write("响应内容头部-------","utf8");
        var end = new Date().getTime();
        while (end-start<1000*3){
            end = new Date().getTime();
        }
        res.end();
});

proxy.listen(3000);

const req = http.request({
        host: '127.0.0.1',
        port: 3000,
        method: 'GET'
    }, (res) => {
        res.resume();
        res.on('end', () => {
            if (!res.complete){
                console.error(
                '消息仍在发送时终止了连接');
            }else{
                console.log("over")
            }

        });
        res.end();
});
