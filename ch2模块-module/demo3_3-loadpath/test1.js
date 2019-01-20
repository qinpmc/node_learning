

// 在以下路径创建 home_2.js
// F:\notes\node\node_learning\ch2模块-module\node_modules

delete require.cache[require.resolve("home_2.js")];
var home_2 = require("home_2.js");
console.log(home_2.home); //china22
console.log(module.paths);
//  以上将在 module.paths 中查找 home2.js，直到找到为止。
/*
[   'F:\\notes\\node\\node_learning\\ch2模块-module\\demo3_3-loadpath\\node_modules',
    'F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules',
    'F:\\notes\\node\\node_learning\\node_modules',
    'F:\\notes\\node\\node_modules',
    'F:\\notes\\node_modules',
    'F:\\node_modules' ]
*/



// 加载包文件
// 在 F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules 创建文件夹：some-library
// some-library 文件夹下包含 package.json, 里面的name指定包名；main指定入口文件，默认index.js
var home3 = require("some-library"); // china-some-librar
console.log(home3.home); //


