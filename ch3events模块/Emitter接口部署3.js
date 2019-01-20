var EventEmitter = require('events').EventEmitter;

function Dog(name) {
    this.name = name;
}

//Dog.prototype = Object.create(EventEmitter.prototype);
// 另一种写法
//Dog.prototype.__proto__ = EventEmitter.prototype;

// 第三种写法
var util = require('util')
util.inherits(Dog, EventEmitter);

var simon = new Dog('simon');
simon.on('bark', function () {
    console.log(this.name + ' barked');
});

setInterval(function () {
    simon.emit('bark');
}, 500);