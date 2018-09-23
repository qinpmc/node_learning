"use strict";

var fs = require("fs");

//读取文本文件
/*
fs.readFile("sample1.txt","utf-8",function (err,data) {
    if(err){
        console.log("error");
    }else{
        console.log(data);
        var buffer = Buffer.from(data,"utf-8");
        console.log(buffer);
    }
})
*/

//读取二进制文件

fs.readFile("children.png",function (err,data) {
    if(err){
        console.log("error");
    }else{
        //console.log(data);
        console.log(data.length+"bytes");

        var text = data.toString("utf-8");
        //console.log(text);
    }
})
