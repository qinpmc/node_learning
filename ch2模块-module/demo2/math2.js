var person = require("./person2");
var add = function (a,b){
    return a+b ;
};
var name = "math";

console.log(module);
exports.add = add;
exports.name = name;
exports.person = person;

/*
Module {
    id: 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\math2.js',
        exports: {},
    parent:
        Module {
        id: '.',
            exports: {},
            parent: null,
            filename: 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\test2.js'
            ,
            loaded: false,
            children: [ [Circular] ],
            paths:
        [ 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\node_modules',
            'F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules',
            'F:\\notes\\node\\node_learning\\node_modules',
            'F:\\notes\\node\\node_modules',
            'F:\\notes\\node_modules',
            'F:\\node_modules' ] },
    filename: 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\math2.js',
   loaded: false,
   children:
        [ Module {
            id: 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\person2.js',
            exports: [Object],
            parent: [Circular],
            filename: 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\person2
                .js',
            loaded: true,
            children: [],
            paths: [Array] } ],
    paths:
        [ 'F:\\notes\\node\\node_learning\\ch2模块-module\\demo2\\node_modules',
            'F:\\notes\\node\\node_learning\\ch2模块-module\\node_modules',
            'F:\\notes\\node\\node_learning\\node_modules',
            'F:\\notes\\node\\node_modules',
            'F:\\notes\\node_modules',
            'F:\\node_modules' ] }
*/