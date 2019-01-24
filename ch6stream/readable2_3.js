var rr = process.stdin.setEncoding('utf8');


rr.on('readable', () => {
    const chunk = process.stdin.read();

process.stdout.write(`readable数据: ${chunk}`);

});
//  绑定 data事件，将 可读流 变为 流动模式，data事件读出内存数据，readbable 事件读取为 null
rr.on('data', (chunk) => {

    process.stdout.write(`chunk数据: ${chunk}`);

});

