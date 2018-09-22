var EventEmitter = require("events");
var util = require("util");

function Person(name){
    this.name = name;
}
util.inherits(Person,EventEmitter);

var p1 = new Person("pp1");
p1.on("eee1",function(){
    console.log(1,arguments);
})

p1.on("eee1",function(){
    console.log(2,arguments);
})

function testOnce(){
    console.log("once",arguments);
}
p1.once("eee1",testOnce)

p1.once("eee1",testOnce)

p1.emit("eee1","arg1"); //once 可以重复绑定，但触发时只执行一次
/*1 { '0': 'arg1' }
2 { '0': 'arg1' }
once { '0': 'arg1' }
once { '0': 'arg1' }*/


p1.emit("eee1","arg2");//once 可以重复绑定，但触发时只执行一次
/*
1 { '0': 'arg2' }
2 { '0': 'arg2' }*/

p1.removeAllListeners();
p1.emit("eee1","arg3"); //没有回调事件

p1.addListener("eee2",function(){
    console.log("new eee2");
})
p1.emit("eee2"); // new eee2
console.log(p1.listeners("eee2")); //[ [Function] ]
console.log(p1.listeners());  //[]