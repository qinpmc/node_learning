

// 分别在以下路径创建 home_2.js
//  f:\\notes\\node\\node_learning1\\ch3module\\demo4-加载路径\\node_modules',
//  f:\\notes\\node\\node_learning1\\ch3module\\node_modules',


delete require.cache[require.resolve("home_2.js")];
var home_2 = require("home_2.js");
console.log(home_2.home); //china22

var home3 = require("home3");
console.log(home3.home3); //china33


