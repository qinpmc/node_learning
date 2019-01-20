var a =require("./a");
var b =require("./b");

a.loaded(); //true，此时a模块全部执行完毕
b.loaded(); //true，此时b模块全部执行完毕

console.log(module.children[0].id);//f:\notes\node\node_learning1\ch3module\demo5-属性方法\a.js

