"use strict";

var fs = require("fs");

fs.stat("sample1.txt",function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log("isFile: "+data.isFile());
        console.log("isDir: "+data.isDirectory());
        if(data.isFile()){
            console.log("size: "+data.size);
            console.log("size: "+data.birthtime);
            console.log("size: "+data.mtime);
        }
    }
})

/*
isFile: true
isDir: false
size: 29
size: Sun Sep 23 2018 16:28:21 GMT+0800 (中国标准时间)
size: Wed Jul 25 2018 16:30:55 GMT+0800 (中国标准时间)*/
