# Buffer
Buffer对象是Node处理**二进制数据的一个接口**。它是Node原生提供的**全局对象，不需要require('buffer')**。
JavaScript比较擅长处理字符串，对于处理二进制数据（比如TCP数据流），就不太擅长。Buffer对象就是为了解决这个问题而设计的。
Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在创建时确定，且无法改变。
## 1 Buffer构造函数

new Buffer(array) 废弃
new Buffer(arrayBuffer[, by teOffset[, length]]) 废弃
new Buffer(buffer) 废弃
new Buffer(size) 废弃
new Buffer(string[, encoding]) 废弃


## 2 Buffer静态方法

## 2.1 Buffer.from()、Buffer.alloc() 与 Buffer.allocUnsafe()
new Buffer() 构造函数已被废弃，建议使用 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe()


- Buffer.from(array) 返回一个 Buffer，包含传入的字节数组的**拷贝**。
- Buffer.from(arrayBuffer[, byteOffset [, length]]) 返回一个 Buffer，与传入的 ArrayBuffer **共享内存**。
> arrayBuffer: ArrayBuffer 或 SharedArrayBuffer，或 TypedArray 的 .buffer 属性。
> where TypedArray() is one of:
> Int8Array();  -128 to 127 
> Uint8Array();  0 to 255
> Uint8ClampedArray();  0 to 255
> Int16Array();  -32768 to 32767
> Uint16Array();  0 to 65535
> Int32Array();
>  Uint32Array();
> Float32Array();
>  Float64Array();

- Buffer.from(buffer) 返回一个 Buffer，包含传入的 Buffer 的内容的*拷贝**。
- Buffer.from(string[, encoding]) 返回一个 Buffer，包含传入的**字符串的拷贝**。
- Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小且已初始化的 Buffer。 该方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 不会包含旧数据。
> size: 新建的 Buffer 的长度
>  fill \<string\> | \<Buffer\> | \<integer\> :预填充 Buffer 的值。默认为 0。预填充 Buffer 的值。默认为 0
> encoding: 指定 fill 的字符编码。默认为 'utf8'。

- Buffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size) 返回一个指定大小但未初始化的 Buffer。 因为 Buffer 是未初始化的，可能包含旧数据。


## 3 Buffer 与字符编码

Node.js 支持的字符编码有：

- 'ascii' - 仅支持 7 位 ASCII 数据。
- 'utf8' - 多字节编码的 Unicode 字符。
- 'utf16le' - 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- 'ucs2' - 'utf16le' 的别名。
- 'base64' - Base64 编码。
- 'latin1' - 将 Buffer 编码成单字节编码的字符串。
- 'binary' - 'latin1' 的别名。
- 'hex' - 将每个字节编码成两个十六进制字符。























