//buf.write(string[, offset[, length]][, encoding])
const buf1 = Buffer.alloc(256);
const len = buf1.write('\u00bd + \u00bc = \u00be', 2);

console.log(buf1); //<Buffer 00 00 c2 bd 20 2b 20 c2 bc ....
console.log(buf1.length); //256


//buf.slice 创建一个包含 ASCII 字母表的 `Buffer`，然后进行切片，再修改原始 `Buffer` 上的一个字节。

const buf2 = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
    // 97 是 'a' 的十进制 ASCII 值。
    buf2[i] = i + 97;
}
const buf3 = buf2.slice(0, 3)
console.log(buf3.toString('ascii', 0, buf3.length));// 输出: abc

buf2[0] = 33;
console.log(buf3.toString('ascii', 0, buf3.length));// 输出: !bc













