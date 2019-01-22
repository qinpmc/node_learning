// Buffer.from(array)
// 创建一个包含字符串 'buffer' 的 UTF-8 字节的 Buffer。
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);


// Buffer.from(arrayBuffer[, byteOffset [, length]])
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存。
const buf = Buffer.from(arr.buffer);

console.log(buf);
// 输出: <Buffer 88 13 a0 0f>

// 改变原先的 Uint16Array 也会改变 Buffer。
arr[1] = 6000;

console.log(buf);
// 输出: <Buffer 88 13 70 17>


// Buffer.alloc(size[, fill[, encoding]])
const buf = Buffer.alloc(5, 'a');

console.log(buf);
// 输出: <Buffer 61 61 61 61 61>




// Buffer.allocUnsafe(size)
const buf = Buffer.allocUnsafe(10);

console.log(buf);
// 输出: <Buffer a0 8b 28 3f 01 00 00 00 50 32>
// (输出的内容是内存的旧数据，每次都不同)

buf.fill(0);

console.log(buf);
// 输出: <Buffer 00 00 00 00 00 00 00 00 00 00>