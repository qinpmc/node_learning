var a =require("./a");
var b =require("./b");

a.loaded(); //true
b.loaded(); //true

console.log(module.children[0].id);//f:\notes\node\node_learning1\ch3module\demo5-属性方法\a.js
comn