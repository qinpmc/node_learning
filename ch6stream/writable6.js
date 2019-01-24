const fs = require("fs");
const reader = fs.createReadStream('foo1.txt');
const writer = process.stdout;

writer.on('pipe', (src) => {
    console.error('有数据正通过管道流入写入器');
    console.log(src === reader); // true
});

writer.on('unpipe', (src) => {
    console.error('已移除可写流管道');
    console.log(src === reader); // true
});

reader.pipe(writer);
reader.unpipe(writer);