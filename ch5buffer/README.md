# Buffer
Buffer对象是Node处理**二进制数据的一个接口**。它是Node原生提供的**全局对象，不需要require('buffer')**。
JavaScript比较擅长处理字符串，对于处理二进制数据（比如TCP数据流），就不太擅长。Buffer对象就是为了解决这个问题而设计的。
Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在创建时确定，且无法改变。
## 1 Buffer构造函数( 废弃)

new Buffer(array) 废弃
new Buffer(arrayBuffer[, by teOffset[, length]]) 废弃
new Buffer(buffer) 废弃
new Buffer(size) 废弃
new Buffer(string[, encoding]) 废弃


## 2 Buffer静态方法

## 2.1 Buffer.from()、Buffer.alloc() 与 Buffer.allocUnsafe()
new Buffer() 构造函数已被废弃，建议使用 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe()


### 2.1.1 Buffer.from(array)
 返回一个 Buffer，包含传入的字节数组的**拷贝**。
### 2.1.2  Buffer.from(arrayBuffer[, byteOffset [, length]])
 返回一个 Buffer，与传入的 ArrayBuffer **共享内存**。
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

### 2.1.3 Buffer.from(buffer)
返回一个 Buffer，包含传入的 Buffer 的内容的*拷贝**。
### 2.1.4 Buffer.from(string[, encoding])
 返回一个 Buffer，包含传入的**字符串的拷贝**。
### 2.1.5 Buffer.alloc(size[, fill[, encoding]])
 返回一个指定大小且已初始化的 Buffer。 该方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 不会包含旧数据。
> size: 新建的 Buffer 的长度
>  fill \<string\> | \<Buffer\> | \<integer\> :预填充 Buffer 的值。默认为 0。预填充 Buffer 的值。默认为 0
> encoding: 指定 fill 的字符编码。默认为 'utf8'。

### 2.1.6 Buffer.allocUnsafe(size) 与 Buffer.allocUnsafeSlow(size)
返回一个指定大小但未初始化的 Buffer。 因为 Buffer 是未初始化的，可能包含旧数据。

详见buffer1


## 2.2 Buffer.isEncoding()/Buffer.isBuffer()/Buffer.byteLength()/Buffer.concat()

### 2.2.1 Buffer.concat(list[, totalLength])

> list <Buffer[]> | <Uint8Array[]> 要合并的 Buffer 数组或 Uint8Array 数组。
> totalLength <integer> 合并后 Buffer 的总长度。
> 返回: <Buffer>


### 2.2.2 Buffer.isEncoding(encoding)

> encoding <string> 要检查的字符编码名称。
> 返回: <boolean>
> 如果 encoding 是支持的字符编码，则返回 true，否则返回 false


### 2.2.3 Buffer.byteLength(string[, encoding])

> string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> | <SharedArrayBuffer> 要计算长度的值。
> encoding <string> 如果 string 是字符串，则指定 string 的字符编码。默认为 'utf8'。
> 返回: <integer> string 的字节数

### 2.2.4 Buffer.isBuffer(obj)
> obj <Object>
> 返回: <boolean>
> 如果 obj 是一个 Buffer，则返回 true，否则返回 false


## 2.3 实例属性

### 2.3.1 buf.length
返回内存中分配给 buf 的字节数。 **不一定反映 buf 中可用数据的字节量**。



## 2.4 实例方法 buf.write()/buf.slice()/buf.toString()/buf.toJSON()/buf.values()/buf.keys()/buf.entries()

### 2.4.1 buf.write(string[, offset[, length]][, encoding])
> string <string> 要写入 buf 的字符串。
> offset <integer> 开始写入的偏移量。默认 0。
> length <integer> 要写入的字节数。默认为 buf.length - offset。
> encoding <string> string 的字符编码。默认为 'utf8'。
> 返回: <integer> 已写入的字节数。

### 2.4.2 buf.slice()

> start <integer> 开始切片的偏移量。默认为 0。
> end <integer> 结束切片的偏移量（不包含）。默认为 buf.length。
> 返回: <Buffer>

注意： 创建一个指向与原始 Buffer 同一内存的新 Buffer，但使用 start 和 end 进行了裁剪。
**修改新建的 Buffer 切片，也会同时修改原始的 Buffer，因为两个对象所分配的内存是重叠的。**
详见buffer4.js 示例

### 2.4.3 buf.toString()

buf.toString([encoding[, start[, end]]])

### 2.4.4 buf.values()/buf.keys()/buf.entries()

### 2.4.5 buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]]


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


## 4 string_decoder

string_decoder 模块提供了一个 API，用于以保留编码的多字节 UTF-8 和 UTF-16 字符的方式将 Buffer 对象解码为字符串.
buffer slice后，汉字从中间被截断，造成乱码，可用StringDecoder  处理.
### 4.1 StringDecoder 类

1. 构造函数： new StringDecoder([encoding])

```
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
```

2. stringDecoder.end([buffer])
> buffer <Buffer> | <TypedArray> | <DataView> 包含要解码的字节的 Buffer、TypedArray 或 DataView。
> 返回: <string>

以字符串形式返回存储在内部缓冲区中的任何剩余输入。 表示不完整的 UTF-8 和 UTF-16 字符的字节将替换为适合字符编码的替换字符。

3. stringDecoder.write(buffer)
> buffer <Buffer> | <TypedArray> | <DataView> 包含要解码的字节的 Buffer、TypedArray 或 DataView。
> 返回: <string>

返回一个已解码的字符串，确保在返回的字符串不包含 Buffer、TypedArray 或 DataView 末尾的任何不完整的多字节字符，
并将其存储在内部缓冲区中，以便下次调用 stringDecoder.write() 或 stringDecoder.end()。



















