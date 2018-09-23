var fs = require("fs");
var buffer = new Buffer("要写入的内容");
fs.open("out2.txt","w", function (err,fd) {
    fs.write(fd,buffer,9,9,9,function(err,bytesWritten){
        console.log(bytesWritten);
        fs.write(fd,buffer,0,9,0,function(err,bytesWritten){
            console.log(buffer.toString()); ///要写入的内容
        })
    })
})
/*
  fd : 文件描述
  buffer :写入的内容
  offset buffer中的偏移量
  length 长度
  position 文件的写入的位置
  callback ：回调函数
 */
