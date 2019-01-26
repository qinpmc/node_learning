var fs = require("fs");

fs.readFile("./README.md","utf8",function(err,data){ //异步读取 文本文件
    if(err) throw err;
    console.log( new String(data) instanceof String); //true
    console.log("异步读取："+data);
});

fs.readFile("children.png",function (err,data){
    if(err) throw err;
    console.log(data instanceof Buffer);  //true
    //console.log("同步读取图片："+data);
});

