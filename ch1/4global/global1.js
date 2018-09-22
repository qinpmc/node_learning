/*
* global  全局对象
* module  当前模块对象
* exports 导出对象
* require 加载模块的方法
* __dirname 当前模块所在的目录的绝对路径
* __filename 当前模块的绝对路径
*
* */

console.log(module);
console.log(exports); //{}
console.log(module.exports===exports); //true
console.log(__dirname); //f:\notes\node\node_learning1\ch1\4global
console.log(__filename); //f:\notes\node\node_learning1\ch1\4global\global1.js

