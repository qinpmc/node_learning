//Buffer.concat
const buf1 = Buffer.alloc(2,1); //size :2, fill :1
const buf2 = Buffer.alloc(4,3);
const buf3 = Buffer.alloc(6,5);

const bufTotal = Buffer.concat([buf1,buf2,buf3],10);// 截掉了后2位
console.log(bufTotal.length);
console.log(bufTotal);

/*
10
<Buffer 01 01 03 03 03 03 05 05 05 05>
*/



//Buffer.isEncoding()
console.log(Buffer.isEncoding('utf8')); // true


//Buffer.isBuffer()
console.log(Buffer.isBuffer(new Date())); // false
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));// true



//Buffer.byteLength()

const str = '\u00bd + \u00bc = \u00be';
console.log(Buffer.byteLength(str)); //12

console.log(Buffer.byteLength(str,"utf8"));//12

