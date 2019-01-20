# Nodejs 模块
Node 应用由模块组成，采用 CommonJS 模块规范。
**每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的**，对其他文件不可见。

如果想在多个文件分享变量，必须定义为global对象的属性。
global.warning = true;
代码中的warning变量，可以被所有文件读取。当然，这样写法是**不推荐**的。

##  1 CommonJS 规范


1. 在CommonJS规范规范下，__每个.js文件都是一个模块__，它们内部各自使用的变量名和函数名都互不冲突，
    例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。

2. 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，
   一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量

3. 每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
   exports.foo = function () { return 'foo'; };
      exports.bar = function () { return 'bar'; };

      也可以写：
      module.exports.foo = function () { return 'foo'; };
      module.exports.bar = function () { return 'bar'; };

      或者
      module.exports = {
       foo：function () { return 'foo'; };
       bar：function () { return 'bar'; };
       }

4. CommonJS模块的特点
- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是**只会在第一次加载时运行一次，然后运行结果就被缓存**了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。



5. AMD规范与CommonJS规范的兼容性

CommonJS规范加载模块是**同步的**，也就是说，只有加载完成，才能执行后面的操作。**AMD规范则是非同步加载模块**，允许指定回调函数。
由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。
但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。

AMD规范使用define方法定义模块:

```
define(['package/lib'], function(lib){
  function foo(){
    lib.log('hello world!');
  }

  return {
    foo: foo
  };
});
```

AMD规范允许输出的模块兼容CommonJS规范:

```
define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");

  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();

  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});
```
 

##  2 module对象

Node内部提供一个Module构建函数。**所有模块都是Module的实例**。

```
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
```

每个模块内部，都有一个module对象，代表当前模块。它有以下属性:

- module.id 模块的识别符，通常是带有绝对路径的模块文件名。
- module.filename 模块的文件名，带有绝对路径。
- module.loaded 返回一个布尔值，表示模块是否已经完成加载。
- module.parent 返回一个对象，表示调用该模块的模块。
- module.children 返回一个数组，表示该模块要用到的其他模块。
- module.exports 表示模块对外输出的值。
- module.paths 模块的查找路


###  2.1 module.exports 属性和 exports变量

1. module.exports 属性
module.exports属性表示当前模块**对外输出的接口**，其他文件加载该模块，实际上就是读取module.exports变量。
参见demo1

```
// test1.js 文件 -------引入math.js、person1.js
var math = require("./math");
var person = require("./person1");
console.log(math.add(100,200)); //300
console.log(math.name); //math

console.log(person); //{ name: 'aa' }


// person1.js 文件
exports.name = "aa";

//module.exports.name = "aa";  // 和上句 exports.name = "aa"; 效果一样
// module.exports  = "bb"; // 如果这样写，上句 exports.name = "aa" 无效，因为module.exports被重新赋值

// math.js 文件
var add = function (a,b){
    return a+b ;
};
var name = "math";
exports.add = add;
exports.name = name;
```
2. exports变量
为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。

```
var exports = module.exports;
```

**注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系**。

```
exports = function(x) {console.log(x)};
```

下面的写法也是无效的:

```
exports.hello = function() {
  return 'hello';
};

module.exports = 'Hello world';
// hello函数是无法对外输出的，因为module.exports被重新赋值
```

























