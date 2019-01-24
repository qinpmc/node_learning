const { PassThrough, Writable } = require('stream');
const pass = new PassThrough(); // stream.PassThrough 类是一个无关紧要的转换流，只是单纯地把输入的字节原封不动地输出。 它主要用于示例或测试
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing 现在为 false。可读流 pass 为暂停模式

// 如果注销此句，由于可读流 pass 为暂停模式，data事件不会触发；放开此句，显示通过read() 读取，readable和data事件都触发
pass.on('readable', () => { console.log(`readable: ${pass.read()}`); });
pass.on('data', (chunk) => { console.log(`data: ${chunk.toString()}`); });
pass.write('okkkkk'); // 不会触发 'data' 事件。
