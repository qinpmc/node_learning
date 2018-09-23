"use strict";

var fs = require("fs");

var data = "This is output data";


// 没有 output1.txt ，自行创建该文件,如果有，会覆盖原有内容
/*
fs.writeFile("output1.txt",data,function (err) {
    if(err){
        console.log("error...");
    }else{
        console.log("write OK!");
    }
})*/

// 同步写入文件
try{
    var res = fs.writeFileSync('output1.txt',data);
    console.log(res);  //undefined
}catch(e){
    console.log("error...");
}
