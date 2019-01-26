var fs = require("fs");
var data;

try{
    data = fs.readFileSync("./README.md","utf8"); //同步读取 文本文件
    console.log( new String(data) instanceof String); //true
    console.log("同步读取："+data);
}catch (e){
    console.log(e);
}


try{
    data = fs.readFileSync("children.png"); //同步读取 非文件文件
    console.log(data instanceof Buffer);  //true
    //console.log("同步读取图片："+data);
}catch (e){
    console.log(e);
}