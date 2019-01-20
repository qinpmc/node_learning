exports.loaded = function(){
    console.log(module.loaded)
}
exports.name = "aaa";

var b = require("./b"); // --去执行b模块,b模块中循环依赖了a模块
console.log(b.name); //bbb，注意，此时b模块全部执行完毕

exports.age = 111;

console.log("a module---------------------"+module.parent.filename);
//a module---------------------f:\notes\node\node_learning1\ch3module\demo5-属性方法\test2-循环依赖.js