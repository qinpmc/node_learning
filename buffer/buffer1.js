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

buffer4[0] = 0;
console.log(buffer4); //<Buffer 00 b8 ad> ,buffer可以修改，字符串不可以
