var buf1= new Buffer("权威指南");
var newBf1= buf1.slice(3,7); // 故意从中间截断，每个汉字三个字节
var newBf2= buf1.slice(7);

console.log(newBf1.toString()); //威�
console.log(newBf2.toString()); //��南

var stringDecoder  =require("string_decoder").StringDecoder;
var decoder1 = new stringDecoder();
console.log(decoder1.write(newBf1)); //威
console.log(decoder1.write(newBf2)); //指南
