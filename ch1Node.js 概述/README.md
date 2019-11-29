# Nodejs 概述

Node内部采用Google公司的**V8引擎，作为JavaScript语言解释器**；通过自行开发的**libuv库，调用操作系统资源**。

##  1 nvm
nvm就是一个可以让你在同一台机器上安装和切换不同版本node的工具

下载地址（nvm-windows）：
https://github.com/coreybutler/nvm-windows
### 1.1 nvm 常用命令：

- nvm ls-remote  ：列出全部可以安装的版本号
- nvm install 版本号  ：安装指定版本，nvm install v7.9.0 ，#命令后加版本号就可以进行安装，字母v可以不写
   nvm install node  ：安装最新版本
- nvm use 版本号 ：切换指定版本，切换效果是全局的，如 nvm use v7.8.0
- nvm current ：查看当前使用的版本
- nvm ls ：查看该系统已经安装的版本

## 2 node 基本用法

- node demo 或者 node demo.js
- 使用-e参数，可以执行代码字符串。
如：node -e 'console.log("Hello World")'
    //Hello World

## 3 REPL环境

Read -eval -print-loop 读取-求值-输出 循环

- 进入 REPL环境：键入node命令，后面没有文件名，就进入一个Node.js的REPL环境
- node --use_strict， REPL将在严格模式下运行。

### 3.1 使用 _ 可引用上次求值的返回值

```
> 1+1
2
> _+100
102
```

### 3.2 基本用法
> .help

输出：
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session  //可用于保存REPL输入的内容
.save     Save all evaluated commands in this REPL session to a file


## 4 异步操作
Node采用V8引擎处理JavaScript脚本，最大特点就是**单线程运行**，一次只能运行一个任务。
这导致Node大量采用异步操作（asynchronous operation），即任务不是马上执行，而是插在任务队列的尾部，等到前面的任务运行完后再执行。

- Node约定，如果某个函数需要回调函数作为参数，则**回调函数是最后一个参数*。另外，回调函数本身的**第一个参数，约定为上一步传入的错误对象**。



## 5 全局对象和全局变量

### 5.1 全局对象（所有模块都可以调用的）

- global：表示Node所在的全局环境，类似于浏览器的window对象。需要注意的是，如果在浏览器中声明一个全局变量，实际上是声明了一个全局对象的属性，
比如var x = 1等同于设置window.x = 1，但是Node不是这样，至少在模块中不是这样（REPL环境的行为与浏览器一致）。
在模块文件中，声明var x = 1，该变量不是global对象的属性，global.x等于undefined。这是因为模块的全局变量都是该模块私有的，其他模块无法取到。

- process：该对象表示Node所处的当前进程，允许开发者与该进程互动。

- console：指向Node内置的console模块，提供命令行环境中的标准输入、标准输出功能。


### 5.2 全局函数
- setTimeout()：用于在指定毫秒之后，运行回调函数。实际的调用间隔，还取决于系统因素。间隔的毫秒数在1毫秒到2,147,483,647毫秒（约24.8天）之间。
  如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。

- clearTimeout()：用于终止一个setTimeout方法新建的定时器。

- setInterval()：用于每隔一定毫秒调用回调函数。由于系统因素，可能无法保证每次调用之间正好间隔指定的毫秒数，但只会多于这个间隔，而不会少于它。
  指定的毫秒数必须是1到2,147,483,647（大约24.8天）之间的整数，如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。

- clearInterval()：终止一个用setInterval方法新建的定时器。

- require()：用于加载模块。

- Buffer()：用于操作二进制数据。


### 5.3 全局变量
- __filename：指向当前运行的脚本文件名。
- __dirname：指向当前运行的脚本所在的目录。

```
console.log(__dirname); // F:\notes\node\node_learning\ch12global
console.log(__filename);  // F:\notes\node\node_learning\ch12global\filename1.js
```


### 5.4 其他变量
一些对象实际上是**模块内部的局部变量**，指向的对象根据模块不同而不同，但是所有模块都适用，可以看作是伪全局变量，主要为**module, module.exports, exports**等























































