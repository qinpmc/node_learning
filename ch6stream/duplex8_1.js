var net = require('net');
var opt = {
    host: '127.0.0.1',
    port: '3000'
};

var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('client send message: ', data.toString());
});
socket.write('hello client');
});

server.listen(opt.port, opt.host, ()=>{
    console.log(server.address());
});