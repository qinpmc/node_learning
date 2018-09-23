"use strict";

var fs = require("fs");

var data = "This is output data";


// 没有 output1.txt ，自行创建该文件,如果有，会覆盖原有内容
fs.writeFile("output1.txt",data,function (err) {
    if(err){
        console.log("error...");
    }else{
        console.log("write OK!");
    }
})

fs.writeFile("output1.txt","我是追加内容",{flag:"a",encoding:"utf-8"},function (err) {
    if(err){
        console.log("error...");
    }else{
        console.log("write OK!");
    }
})

fs.appendFile("output1.txt",new Buffer("我是追加内容222"));
fs.appendFile("output1.txt","我是追加内容333");
// 同步写入文件
/*try{
    var res = fs.writeFileSync('output1.txt',data);
    console.log(res);  //undefined
}catch(e){
    console.log("error...");
}*/
