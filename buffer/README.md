## buffer

### buffer定义
- new Buffer(size)
- new Buffer(array)
- new Buffer(str,[encoding])


```
var buffer1 = new Buffer(3);
buffer1[0] = 0x61;
buffer1[1] = 0x62;
buffer1[2] = 0x63;

console.log(buffer1.toString());// abc

var buffer2 = new Buffer([0x61,0x62,0x63]);
console.log(buffer2.toString());// abc

var buffer3 = new Buffer("abc");
console.log(buffer3.toString());// abc

var buffer4 = new Buffer("中","utf8");
console.log(buffer4);// <Buffer e4 b8 ad>  一个汉字三个字节
console.log(buffer4.length);// 3
```
### buffer 属性方法

- length；属性
- toString()
- write() ;第一个参数：写入内容，第二个参数：offset；第三个参数：长度；第四个参数：encoding

```
var buf1 = new Buffer(12);
buf1.write("中国",0,6); //第一个参数：写入内容，第二个参数：offset；第三个参数：长度；第四个参数：encoding
console.log(buf1.toString()); //中国
```

- slice() ;两个参数，第一个起始位置，第二个参数（可选) 结束位置，没有取末尾


- copy() 第一个参数：目标buffer；第二个参数：目标buffer的起始位置；
         第三个参数： 源buffer的起始位置；第四个参数： 源buffer的结束位置

```
var srcBuuffer = new Buffer([4,5]);
var tarBuffer = new Buffer(6);

tarBuffer[0] =1;
tarBuffer[1] =2;
tarBuffer[2] =3;

srcBuuffer.copy(tarBuffer,3,0,3); // 第一个参数：目标buffer；第二个参数：目标buffer的起始位置；
// 第三个参数： 源buffer的起始位置；第四个参数： 源buffer的结束位置
console.log(tarBuffer); //<Buffer 01 02 03 04 05 00>
```

### 静态方法

- isBuffer
- byteLength；buffer的长度
- isEncoding;参数为字符串，是否支持该字符编码
- concat；第一个参数为要合并的buffer列表；第二个参数可选，为合并后取的长度

```
console.log(Buffer.isBuffer("china")); //false

console.log(Buffer.isBuffer(new Buffer("china")));//true

console.log(Buffer.byteLength(new Buffer("i love china")));//12

console.log(Buffer.isEncoding("utf-8"));//true

var buffer1 = new Buffer([1,2,3]);
var buffer2 = new Buffer([4,5,6]);
var buffer3 = new Buffer([7,8,9]);

var concatBuffer = Buffer.concat([buffer1,buffer2,buffer3]);
var concatBuffer2 = Buffer.concat([buffer1,buffer2,buffer3],7);

console.log(concatBuffer); //<Buffer 01 02 03 04 05 06 07 08 09>
console.log(concatBuffer2); //<Buffer 01 02 03 04 05 06 07>
```

### 注意事项

1. buffer 不同于字符串，是可被修改的

```
var str = "权威指南";
var buffer1 = new Buffer(str,"utf8");
console.log(buffer1); //<Buffer e6 9d 83 e5 a8 81 e6 8c 87 e5 8d 97>

var newBuffer1 = buffer1.slice(1);
console.log(buffer1); // buffer1 不变
console.log(newBuffer1);

newBuffer1[0] =5;
console.log("修改newBuffer1")
console.log(buffer1);         //  buffer1 也改变了！！
console.log(newBuffer1);      //newBuffer1改变了
console.log(buffer1.toString());

```
2. buffer slice后，汉字从中间被截断，造成乱码，可用StringDecoder  处理

```
var buf1= new Buffer("权威指南");
var newBf1= buf1.slice(3,7); // 故意从中间截断，每个汉字三个字节
var newBf2= buf1.slice(7);

console.log(newBf1.toString()); //威�
console.log(newBf2.toString()); //��南

var stringDecoder  =require("string_decoder").StringDecoder;
var decoder1 = new stringDecoder();
console.log(decoder1.write(newBf1)); //威
console.log(decoder1.write(newBf2)); //指南
```




