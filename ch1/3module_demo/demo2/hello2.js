"use strict";
function hello(){
    console.log("hello");
}

function greet(name){
    console.log("greet to: "+name);
}

/*module.exports = {
    hello:hello,
    greet:greet
}*/

/*
module.exports.hello = hello;
module.exports.greet = greet; */
/**/
exports.hello = hello;
exports.greet = greet;
 



//错误的写法，为导出任何变量
/*
exports = {
	hello:hello,
    greet:greet
}*/



