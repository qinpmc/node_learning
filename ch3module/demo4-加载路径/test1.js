/*var home_1 = require("./home_1");
console.log(home_1.home); //china
console.log(module.paths); */

/*
[ 'f:\\notes\\node\\node_learning1\\ch3module\\demo4-加载路径\\node_modules',
    'f:\\notes\\node\\node_learning1\\ch3module\\node_modules',
    'f:\\notes\\node\\node_learning1\\node_modules',
    'f:\\notes\\node\\node_modules',
    'f:\\notes\\node_modules',
    'f:\\node_modules' ]*/


/*
var fs = require("fs");
console.log(typeof fs);//object
console.log(module.paths);*/
/*
 [ 'f:\\notes\\node\\node_learning1\\ch3module\\demo4-加载路径\\node_modules',
 'f:\\notes\\node\\node_learning1\\ch3module\\node_modules',
 'f:\\notes\\node\\node_learning1\\node_modules',
 'f:\\notes\\node\\node_modules',
 'f:\\notes\\node_modules',
 'f:\\node_modules' ]*/


// 分别在以下路径创建 home_2.js
//  f:\\notes\\node\\node_learning1\\ch3module\\demo4-加载路径\\node_modules',
//  f:\\notes\\node\\node_learning1\\ch3module\\node_modules',


 delete require.cache[require.resolve("home_2.js")];
 var home_2 = require("home_2.js");
 console.log(home_2.home); //china22

var home3 = require("home3");
console.log(home3.home3); //china33