var fs = require("fs");
var fd = fs.openSync("sample1.txt","r");

/*
  fd 文件描述符索引
  0 process.stdout.write 标准输出
  1 process.stdin 标准输入
  2 process.stderr 错误输出
 */
console.log(fd); //3

fs.open("sample1.txt","r",function(err,fd){
    console.log(fd); //4 ,前面已打开一个
})