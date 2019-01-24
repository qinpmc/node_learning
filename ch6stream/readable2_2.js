const fs = require('fs');
const rr = fs.createReadStream('foo1.txt');


rr.on('readable', () => {
    console.log(`readable事件读取的数据  ${rr.read()}`); //readable事件读取的数据  null
});

// 绑定 data事件，将 可读流 变为 流动模式，data事件读出内存数据，readbable 事件读取为 null
rr.on('data',(chunk) => {
    console.log(`data事件读取的数据 ${chunk}`); //data事件读取的数据 readable事件和data事件
});

rr.on('end', () => {
    console.log('结束');
});