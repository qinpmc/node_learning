# Nodejs Events模块
回调函数模式让 Node 可以处理异步操作。但是，为了适应回调函数，异步操作只能有两个状态：开始和结束。
对于那些多状态的异步操作（状态1，状态2，状态3，……），回调函数就会无法处理，你不得不将异步操作拆开，分成多个阶段。
每个阶段结束时，调用下一个回调函数。为了解决这个问题，Node 提供 Event Emitter 接口。通过事件，解决多状态异步操作的响应问题。


##  1 概述

- events模块的EventEmitter是一个构造函数，可以用来生成事件发生器的实例emitter。
- 事件发生器的实例方法on用来监听事件，实例方法emit用来发出事件。

```
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on('someEvent', function () {
    console.log('event has occured');
});

function f() {
    console.log('start');
    emitter.emit('someEvent');
    console.log('end');
}

f();
```


## 2 Event Emitter 接口的部署

详见 Emitter接口部署3.js

```
var EventEmitter = require('events').EventEmitter;

function Dog(name) {
    this.name = name;
}

// --------继承该接口 ------------
//Dog.prototype = Object.create(EventEmitter.prototype);
// 另一种写法
//Dog.prototype.__proto__ = EventEmitter.prototype;

// 第三种写法
var util = require('util')
util.inherits(Dog, EventEmitter);

```

## 3 Event Emitter 的实例方法

- emitter.on(name, f) 对事件name指定监听函数f
- emitter.addListener(name, f) addListener是on方法的别名
- emitter.once(name, f) 与on方法类似，但是监听函数f是一次性的，使用后自动移除，once 可以重复绑定，但触发时只执行一次
- emitter.listeners(name) 返回一个数组，成员是事件name所有监听函数
- emitter.removeListener(name, f) 移除事件name的监听函数f
- emitter.removeAllListeners(name) 移除事件name的所有监听函数; 如果**不带参数，则表示移除所有事件的所有回调函数**。
- setMaxListeners()Node默认允许同一个事件最多可以指定10个回调函数。超过10个回调函数，会发出一个警告。这个门槛值可以通过setMaxListeners方法改变

```
emitter.setMaxListeners(20);
```

## 4  默认支持事件

Events模块默认支持两个事件。
- newListener事件：添加新的回调函数时触发。
- removeListener事件：移除回调时触发。

















