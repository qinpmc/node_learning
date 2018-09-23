var str = "权威指南";
var buffer1 = new Buffer(str,"utf8");
console.log(buffer1); //<Buffer e6 9d 83 e5 a8 81 e6 8c 87 e5 8d 97>
console.log(buffer1.length);  //12
console.log(Buffer.byteLength(buffer1));  //12


var newBuffer1 = buffer1.slice(1);
console.log(buffer1); // buffer1 不变
console.log(newBuffer1);

newBuffer1[0] =5;
console.log("修改newBuffer1")
console.log(buffer1);   //  buffer1 也改变了！！
console.log(newBuffer1); //newBuffer1改变了
console.log(buffer1.toString());

