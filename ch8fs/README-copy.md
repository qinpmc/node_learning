# Fs
fs 模块提供了一个 API，用于以接近标准 POSIX 函数的方式与文件系统进行交互.
**所有文件系统操作都具有同步和异步**的形式。
**异步的形式始终将完成回调作为其最后一个参数**。 传递给完成回调的参数取决于具体方法，但**第一个参数始终保留用于异常**。 如果操作成功完成，则第一个参数将为 null 或 undefined。
**同步操作发生的异常会立即抛出，可以使用 try/catch 处理**，也可以允许冒泡


## 1文件操作

## 1.1文件读取

### 1.1.1 同步读取 fs.readFileSync(path[, options])

> path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
> options <Object> | <string>
 > -  encoding <string> | <null> 默认为 null。
 > - flag <string> 请参阅文件系统标志的支持。默认为 'r'。

返回: <string> | <Buffer>, path 的内容。
  
如果**指定了 encoding 选项，则此函数返回字符串**，否则返回 buffer。

详见：fsreadsync1.js

当 path 是目录时，fs.readFile() 与 fs.readFileSync() 的行为是特定于平台的。 
- 在 macOS、Linux 与 Windows 上，将返回错误。      
- 在 FreeBSD 上，将返回目录内容的表示。

### 1.1.2 异步读取fs.readFile(path[, options], callback)

> path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
> options <Object> | <string>
 > - encoding <string> | <null> 默认为 null。
 > - flag <string> 请参阅文件系统标志的支持。默认为 'r'。
> callback <Function>
 > - err <Error>
 > - data <string> | <Buffer>

readFile方法的第一个参数是文件的路径，可以是**绝对路径，也可以是相对路径**。
注意，如果是**相对路径，是相对于当前进程所在的路径（process.cwd()）**，而不是相对于当前脚本所在的路径。

详见：fsread2.js


### 1.1.3 通过文件流读取fs.createReadStream(path[, options])
createReadStream方法往往用于打开大型的文本文件，创建一个读取操作的数据流。    
所谓大型文本文件，指的是文本文件的体积很大，读取操作的缓存装不下，只能分成几次发送，每次发送会触发一个data事件，发送结束会触发end事件。  

> path <string> | <Buffer> | <URL>

> options <string> | <Object>
    - flags <string> 请参阅文件系统标志的支持。默认为 'r'。
    - encoding <string> 默认为 null。
    -  fd <integer> 默认为 null。
    - mode <integer> 默认为 0o666。
    - autoClose <boolean> 默认为 true。
    - start <integer>
    - end <integer> 默认为 Infinity。
    - highWaterMark <integer> 默认为 64 * 1024。


详见fsreadStream3-1.js fsreadStream3-2.js


## 1.2 文件写入

### 1.2.1 同步写入 fs.writeFileSync(file, data[, options])
参数同异步，没有回调函数参数

### 1.2.2 异步写入fs.writeFile(file, data[, options], callback)

> file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
> data <string> | <Buffer> | <TypedArray> | <DataView>
> options <Object> | <string>
     - encoding <string> | <null> 默认为 'utf8'。
     - mode <integer> 默认为 0o666。
     - flag <string> 请参阅文件系统标志的支持。默认为 'w'。
> callback <Function>
     - err <Error>
     
如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容
异步地将数据写入文件，**如果文件已存在则覆盖该文件.**

详见 fswrite4-1.js



### 1.2.2 文件流写入fs.createWriteStream(path[, options])

> path <string> | <Buffer> | <URL>
> options <string> | <Object>
   - flags <string> 请参阅文件系统标志的支持。默认为 'w'。
   - encoding <string> 默认为 'utf8'。
   - fd <integer> 默认为 null。
   - mode <integer> 默认为 0o666。
   - autoClose <boolean> 默认为 true。
   - start <integer>
返回: <fs.WriteStream> ,可写流。











 