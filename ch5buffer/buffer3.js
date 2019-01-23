const buf = Buffer.alloc(1024);
console.log(buf.length);//1024

buf.write("http://nodejs.cn",0,"utf8");
console.log(buf.length); //1024
console.log(Buffer.byteLength(buf)); //1024

console.log(Buffer.byteLength(Buffer.from("http://nodejs.cn"))); //16

const buf2 = Buffer.from([1, 2, 3, 4]);
console.log(buf2.length); //4