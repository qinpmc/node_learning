# Util

## 1 方法

### 1.1 util.callbackify(original)
将 async 异步函数(或者一个返回值为 Promise 的函数)转换成遵循异常优先的回调风格的函数.

### 1.2 util.debuglog(section)

创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr。


### 1.3 util.deprecate(fn, msg[, code])
包装给定的 function 或类，并标记为废弃的.


### 1.4 util.format(format[, ...args])
返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。


第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：

- %s - 字符串。
- %d - 数值（整数或浮点数）。
- %i - Integer.
- %f - Floating point value.
- %j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
- %o - Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() with options { showHidden: true, depth: 4, showProxy: true }. This will show the full object including non-enumerable symbols and properties.
- %O - Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() without options. This will show the full object not including non-enumerable symbols and properties.
- %% - 单个百分号（'%'）。不消耗参数。

```
console.log( util.format('hello %s', 'world') );
// 输出：hello world
```


### 1.5 util.inherits(constructor, superConstructor)
从一个构造函数中继承原型方法到另一个


### 1.6 util.inspect(object[, options])
util.inspect(object[, showHidden[, depth[, colors]]])
返回对象的字符串表示。

- obj：js原始值，或者对象。
- options：配置参数，包含下面选项
- showHidden：如果是true的话，obj的非枚举属性也会被展示出来。默认是false。
- depth：如果obj是对象，那么，depth限制对象递归展示的层级，这对可读性有一定的好处，默认是2。如果设置为null，则不做限制。
- colors：自定义配色方案。
- showProxy：如果为真，如果对象和函数是代理对象，则将显示它们的目标对象和处理对象，默认false。
- maxArrayLength：如果obj是数组，那么限制最大可展示的数组个数。默认是100，如果设置为null，则不做限制。如果设置为0或负数，则一个都不展示。











