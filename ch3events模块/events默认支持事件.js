var EventEmitter = require("events");
var util = require("util");

function Person(name){
    this.name = name;
}
util.inherits(Person,EventEmitter);

var p1 = new Person("pp1");

p1.on("newListener", function (evtName) {
    console.log("New Listener: " + evtName);
});

p1.on("removeListener", function (evtName) {
    console.log("Removed Listener: " + evtName);
});

function foo() {}

p1.on("save-user", foo);
p1.removeListener("save-user", foo);

/*
New Listener: removeListener
New Listener: save-user
Removed Listener: save-user
*/
