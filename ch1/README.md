## REPL
Read -eval -print-loop 读取-求值-输出 循环

1. 使用 _ 可引用上次求值的返回值

```
> 1+1
2
> _+100
102
```

2. 基本用法
> .help

输出：
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session  //可用于保存REPL输入的内容
.save     Save all evaluated commands in this REPL session to a file






### 初始化项目
![](./init.png)


### 安装

全局安装：下载模块到Node安装目录，各个项目均可调用
npm install -g package

本地安装 ：下载模块到当前目录的node_modules子目录，只有当前目录和它的子目录，才可以调用该模块
npm install package

### 网站访问流程

![](./process1.png)
![](./process2.png)

### URL组成
![](./url组成.png)


常用对照表：
tool.oschina.net/commons


### fs文件模块

1. readFileSync 同步读取文件，返回字符串
var text = fs.readFileSync(fileName,"utf-8");

2. readFile 异步读取文件
fs.readFil(fileName,"utf-8"，function(err,text){});


### global
nodejs中 global 类似于浏览器中的 window；
nodejs中this 一般指向模块的exports ，并非像浏览器中默认指向window

####  1 global属性

clearImmediate
setImmediate
pid
process 当前进程对象


#### 2 process对象

- process.stdout.write
- process.stdin.on
- process.argv.forEach
示例(global-process.js)

- process.on
示例(process2.js)

- process.cwd
- process.chdir
示例(process3.js)

- process.nextTick
示例(process4.js)

- process.nextTick  优先级
示例(setImmediate5.js)

优先级
nextTick > setTimeout > setImmediate > 异步IO操作

### util模块

- util.inherits(Child,Parent)
- util.inspect(obj1)
- util.isArray
- util.isDate
- util.isRegExp
