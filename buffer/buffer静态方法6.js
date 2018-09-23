
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