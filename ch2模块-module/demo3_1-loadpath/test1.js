// 演示 相对路径   核心模块 加载

/*var home_1 = require("./home_1");  //相对路径
console.log(home_1.home); //china
console.log(require.resolve("./home_1"));  //F:\notes\node\node_learning\ch2模块-module\demo3_1-loadpath\home_1.js
console.log(module.paths);*/



/*
 [ 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo3_1-loadpath\\node_module
 s',
 'F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules',
 'F:\\notes\\node\\node_learning\\node_modules',
 'F:\\notes\\node\\node_modules',
 'F:\\notes\\node_modules',
 'F:\\node_modules' ]
 */



var fs = require("fs");   // 核心模块
console.log(require.resolve("fs")); //fs
console.log(typeof fs);//object
console.log(module.paths);

/*
 [ 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo3_1-loadpath\\node_module
 s',
 'F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules',
 'F:\\notes\\node\\node_learning\\node_modules',
 'F:\\notes\\node\\node_modules',
 'F:\\notes\\node_modules',
 'F:\\node_modules' ]
 */
