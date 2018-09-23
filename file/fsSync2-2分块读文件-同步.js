"use strict";

var fs = require("fs");
var buffer = new Buffer(20);
var fd = fs.openSync("sample1.txt","r");

/*
 fd 文件描述符
 buffer 存放数据的容器
 offset 往buffer中的偏移量
 length 长度
 position 文件的当前读取位置
 */
fs.readSync(fd,buffer,0,10,5);
console.log(buffer.toString()); //is sample1 ;原文为： This is sample1 txt ..