exports.loaded = function(){
    console.log(module.loaded)
}
exports.name = "aaa";
console.log("a module begin loading......");
var b = require("./b"); // --去执行b模块
console.log(b.name); //bbb
exports.age = 111;
console.log("a module---------------------"+module.parent.filename);
//a module---------------------f:\notes\node\node_learning1\ch3module\demo5-属性方法\test2-循环依赖.js