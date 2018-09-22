
var home = require("./home");

console.log(module.id);        // .
console.log(module.filename);  //f:\notes\node\node_learning1\ch3module\demo5-属性方法\test1.js
console.log(module.loaded);    //false

var children = module.children;


console.log(module.children[0].id);//f:\notes\node\node_learning1\ch3module\demo5-属性方法\home.js

