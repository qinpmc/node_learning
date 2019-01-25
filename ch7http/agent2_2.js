var http = require('http');

// 设置HTTP agent开启keep-alive模式
// 套接字的打开时间维持1分钟
var agent = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 60000
});

// 每次请求结束之后，都会再发起一次请求
// doReq每调用一次只会触发2次请求
function doReq(again, iter) {
    let request = http.request({
            hostname: 'localhost',
            port: 3333,
            agent: agent
        }, (res) => {
            console.log(`${new Date().valueOf()} ${iter} ${again} Headers: ${JSON.stringify(res.headers)}`);
    console.log(request.socket.localPort);
    // 设置解析响应的编码格式
    res.setEncoding('utf8');
    // 接收响应
    res.on('data', (chunk) => {
        console.log(`${new Date().valueOf()} ${iter} ${again} Body: ${chunk}`);
});
    if (again) doReq(false, iter);
}) ;
    // 发起请求
    request.end();
}

for (let i = 0; i < 3; i++) {
    doReq(true, i);
}
