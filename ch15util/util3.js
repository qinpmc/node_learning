var util = require("util");

var foo = function(){
    console.log("foo");
};

var foo2 = util.deprecate(foo,"foo is deprecate");
foo2();

/*
foo
(node:19604) DeprecationWarning: foo is deprecate
*/

