exports.loaded = function(){
    console.log(module.loaded)
}
exports.name = "aaa";
console.log("a module begin loading......");
var b = require("./b"); // --去执行b模块
console.log(b.name); //bbb
exports.age = 111;