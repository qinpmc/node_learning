"use strict";
var hello2 = require("./hello2");

hello2.hello();
hello2.greet("test22222");

var data2 = require("./data.json");
console.log(typeof data2); // object
console.log(data2);