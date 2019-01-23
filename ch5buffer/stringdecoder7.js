
const buf1 = Buffer.from("权威指南");
const newBuff = buf1.slice(3,7);
var newBuff2= buf1.slice(7);

console.log(newBuff.toString()); //威�
console.log(newBuff2.toString()); //��南

const{ StringDecoder} = require("string_decoder");
var sd = new StringDecoder();
var str1 = sd.write(newBuff);
console.log(str1); // 威

var str2 = sd.write(newBuff2);
console.log(str2); // 指南

var str3 = sd.end(buf1);
console.log(str3); // 权威指南


