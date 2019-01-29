# Global

## 1 模块的变量

所有模块都提供这些对象。 以下变量虽然看起来是全局的，但其实并不是。 它们仅存在于所有的模块范围内：

__dirname
__filename
exports
module
require()

详细可见 ch1 Nodejs概述

## 1.1 global

在浏览器中，顶层作用域是全局作用域。 这意味着在浏览器中 var something 将定义一个新的全局变量。
在 Node.js 中，这是不同的。 顶层作用域不是全局作用域，**Node.js 模块中的 var something 的作用域只在该模块内**。

详见global2.js

## 1.2 process
该对象表示Node所处的当前进程，允许开发者与该进程互动。
详见process章节。

## 1.3 console
指向Node内置的console模块，提供命令行环境中的标准输入、标准输出功能

## 1.4 Buffer 类
详见buffer章节。

## 1.5 URL 类 、URLSearchParams 类
详见url章节。

### 1.6  setImmediate(callback[, ...args])、setInterval(callback, delay[, ...args])、setTimeout(callback, delay[, ...args])

- callback <Function> 当定时器到点时要调用的函数。
- delay <number> 调用 callback 之前要等待的毫秒数。
- ...args <any> 当调用 callback 时要传入的可选参数。



setTimeout、setImmediate方法具有可用util.promisify()提供的promises常用变体：












