"use strict";
function hello(){
    console.log("hello");
}

function greet(name){
    console.log("greet to: "+name);
}

exports.hello = hello;
exports.greet = greet;

/*
//等同上方输出
module.exports = {
 hello:hello,
 greet:greet
 }*/

/*
 //等同上方输出
 module.exports.hello = hello;
 module.exports.greet = greet; */
/**/


//错误的写法，未导出任何变量
/*
exports = {
	hello:hello,
    greet:greet
}*/



