# nodejs_notes

### CommonJS规范
   1. node.js模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，
    例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。

   2. 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，
   一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量

   3. 如果只写模块名：
      var greet = require('hello');
      则Node会依次在 __内置模块__、 __全局模块__ 和 __当前模块__ 下查找hello.js
	  
	     linux下：
		/home/user/node_modules/foo/bar   // 内置模块--windows下取决于安装目录（环境变量path）
		/home/node_modules/foo/bar        // 全局模块 --windows下如C:\Users\user\node_modules
		/node_modules/foo/bar             // 当前模块
	  

   4. exports.foo = function () { return 'foo'; };
      exports.bar = function () { return 'bar'; };

      也可以写：
      module.exports.foo = function () { return 'foo'; };
      module.exports.bar = function () { return 'bar'; };

      或者
      module.exports = {
       foo：function () { return 'foo'; };
       bar：function () { return 'bar'; };
       }


示例2：

hello2.js

```
"use strict";
function hello(){
    console.log("hello");
}

function greet(name){
    console.log("greet to: "+name);
}

/*module.exports = {
    hello:hello,
    greet:greet
}*/

/*
module.exports.hello = hello;
module.exports.greet = greet; */
/**/
exports.hello = hello;
exports.greet = greet;
 



//错误的写法，为导出任何变量
/*
exports = {
	hello:hello,
    greet:greet
}*/

```

main2.js

```
"use strict";
var hello2 = require("./hello2");

hello2.hello();
hello2.greet("test22222");

var data2 = require("./data.json");
console.log(typeof data2);
console.log(data2);
```


### 可以使用以下方式加载和使用一个JSON文件

var data = require('./data.json');

