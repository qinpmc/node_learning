// 可读流状态
const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing 现在为 false。

pass.on('data', (chunk) => { console.log(`data: ${chunk.toString()}`); });
pass.write('okkkkk'); // 不会触发 'data' 事件。

// pass.resume(); // 必须调用它才会触发 'data' 事件。注释此句控制台没有输出，放开此句控制台输出 ok