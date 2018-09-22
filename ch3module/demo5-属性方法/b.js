exports.loaded = function(){
    console.log(module.loaded)
}
exports.name = "bbb";
console.log("b module begin loading......");
var a = require("./a"); // 发现是循环依赖，并不返回执行a模块，继续向下执行
console.log(a.name, a.age); // aaa undefined   ；此时 a模块中仅输出了name ，age还没有赋值
