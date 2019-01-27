# Fs
fs 模块提供了一个 API，用于以接近标准 POSIX 函数的方式与文件系统进行交互.
**所有文件系统操作都具有同步和异步**的形式。
**异步的形式始终将完成回调作为其最后一个参数**。 传递给完成回调的参数取决于具体方法，但**第一个参数始终保留用于异常**。 如果操作成功完成，则第一个参数将为 null 或 undefined。
**同步操作发生的异常会立即抛出，可以使用 try/catch 处理**，也可以允许冒泡


## 1 文件路径
大多数 fs 操作的文件路径可以是**字符串、Buffer、或使用 file: 协议的 URL 对象**。

```
fs.open('/open/some/file.txt', 'r', (err, fd) => {  // 绝对路径
 
});

fs.open('file.txt', 'r', (err, fd) => {  // 相对路径的,相对于 process.cwd()
 
});
```

使用 Buffer 指定的路径主要用于将文件路径视为不透明字节序列的某些 POSIX 操作系统。     
在这样的系统上，单个文件路径可以包含使用多种字符编码的子序列。 与字符串路径一样，**Buffer 路径可以是相对路径或绝对路径**    

```
fs.open(Buffer.from('/open/some/file.txt'), 'r', (err, fd) => { // Buffer 路径
 
});
```


## 2 文件描述符

在 POSIX 系统上，对于每个进程，内核都维护一个当前打开的文件和资源的表格。 为每个打开的文件分配一个称为文件描述符的**简单数字标识符**.     
在系统级，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定文件。 Windows 系统使用不同但概念上类似的机制来跟踪资源。      
为了简化用户的工作，Node.js 抽象出操作系统之间的特定差异，并**为所有打开的文件分配一个数字文件描述符**。     

详见 fd文件描述符0.js

## 3 文件相关类


### 3.1 fs.Dirent 类
当在 withFileTypes 选项设置为 true 的情况下调用 fs.readdir() 或 fs.readdirSync() 时，生成的数组将填充 fs.Dirent 对象，而不是字符串或 Buffer.   
node v10.3.0 未成功


### 3.2 fs.FSWatcher 类
成功调用 fs.watch() 方法将返回一个新的 fs.FSWatcher 对象。修改了指定监视的文件，就会触发 'change' 事件
- 'change' 事件
- 'close' 事件
- 'error' 事件
- watcher.close()


### 3.3 fs.ReadStream 类
成功调用 fs.createReadStream() 将返回一个新的 fs.ReadStream 对象。

### 3.4  fs.WriteStream 类


### 3.5 fs.Stats 类
fs.Stats 对象提供有关文件的信息.
从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步方法返回的对象都属于此类型。

```
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

- stats.isBlockDevice()
- stats.isCharacterDevice()
- stats.isDirectory()
- stats.isFIFO()
- stats.isFile()
- stats.isSocket()
- stats.isSymbolicLink()
- stats.dev
- stats.ino
- stats.mode
- stats.nlink
- stats.uid
- stats.gid
- stats.rdev
- stats.size
- stats.blksize
- stats.blocks
- stats.atimeMs
- stats.mtimeMs
- stats.ctimeMs
- stats.birthtimeMs
- stats.atime
- stats.mtime
- stats.ctime
- stats.birthtime



## 4文件操作

## 4.1文件读取

### 4.1.1 同步读取 fs.readFileSync(path[, options])

```
> path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。 
> options <Object> | <string>
  -  encoding <string> | <null> 默认为 null。
  - flag <string> 请参阅文件系统标志的支持。默认为 'r'。
```


返回: <string> | <Buffer>, path 的内容。
  
如果**指定了 encoding 选项，则此函数返回字符串**，否则返回 buffer。

详见：fsreadsync1.js

当 path 是目录时，fs.readFile() 与 fs.readFileSync() 的行为是特定于平台的。 
- 在 macOS、Linux 与 Windows 上，将返回错误。      
- 在 FreeBSD 上，将返回目录内容的表示。

### 4.1.2 异步读取fs.readFile(path[, options], callback)

```
> path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
> options <Object> | <string>
   - encoding <string> | <null> 默认为 null。
   - flag <string> 请参阅文件系统标志的支持。默认为 'r'。
> callback <Function>
   - err <Error>
   - data <string> | <Buffer>
```


readFile方法的第一个参数是文件的路径，可以是**绝对路径，也可以是相对路径**。
注意，如果是**相对路径，是相对于当前进程所在的路径（process.cwd()）**，而不是相对于当前脚本所在的路径。

详见：fsread2.js


### 4.1.3 通过文件流读取fs.createReadStream(path[, options])
createReadStream方法往往用于打开大型的文本文件，创建一个读取操作的数据流。    
所谓大型文本文件，指的是文本文件的体积很大，读取操作的缓存装不下，只能分成几次发送，每次发送会触发一个data事件，发送结束会触发end事件。  

```
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

```

详见fsreadStream3-1.js fsreadStream3-2.js


## 4.2 文件写入

### 4.2.1 同步写入 fs.writeFileSync(file, data[, options])
参数同异步，没有回调函数参数

### 4.2.2 异步写入fs.writeFile(file, data[, options], callback)

```
> file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
> data <string> | <Buffer> | <TypedArray> | <DataView>
> options <Object> | <string>
     - encoding <string> | <null> 默认为 'utf8'。
     - mode <integer> 默认为 0o666。
     - flag <string> 请参阅文件系统标志的支持。默认为 'w'。
> callback <Function>
     - err <Error>
```

     
如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容
异步地将数据写入文件，**如果文件已存在则覆盖该文件.**

详见 fswrite4-1.js



### 4.2.2 文件流写入fs.createWriteStream(path[, options])

```
> path <string> | <Buffer> | <URL>
> options <string> | <Object>
   - flags <string> 请参阅文件系统标志的支持。默认为 'w'。
   - encoding <string> 默认为 'utf8'。
   - fd <integer> 默认为 null。
   - mode <integer> 默认为 0o666。
   - autoClose <boolean> 默认为 true。
   - start <integer>
```

返回: <fs.WriteStream> ,可写流。

详见 fswrite4-2.js

## 4.3 获取文件信息 fs.stat(path[, options], callback)

```
> path <string> | <Buffer> | <URL>
> options <Object>
    - bigint <boolean> 返回的 fs.Stats 对象中的数值是否应为 bigint 型。默认为 false。
> callback <Function> 
    - err <Error>
    - stats <fs.Stats>
```



## 4.4 文件是否存在fs.access(path[, mode], callback)

```
> path <string> | <Buffer> | <URL>
> mode <integer> 默认为 fs.constants.F_OK。
> callback <Function>
    - err <Error>
```

- **不建议在调用 fs.open()、fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查文件的可访问性**。    
这样做会引入竞争条件，因为其他进程可能会在两个调用之间更改文件的状态。 相反，用户代码**应该直接打开、读取或写入文件**，并处理在文件无法访问时引发的错误。
- 测试用户对 path 指定的文件或目录的权限。 mode 参数是一个可选的整数，指定要执行的可访问性检查。 **mode 可选的值参阅文件可访问性的常量**.

**文件可访问性的常量**
fs.constants.F_OK	表明文件对调用进程可见。 这对于确定文件**是否存在**很有用，但对 rwx 权限没有任何说明。 如果未指定模式，则默认值为该值。  
fs.constants.R_OK	表明调用进程可以**读取**文件。   
fs.constants.W_OK	表明调用进程可以**写入**文件。    
fs.constants.X_OK	表明调用进程可以**执行**文件。 在 Windows 上无效（效果同 fs.constants.F_OK）。

## 4.5 创建目录fs.mkdir(path[, options], callback)

```
> path <string> | <Buffer> | <URL>
> options <Object> | <integer>
   - recursive <boolean> 默认为 false。
   - mode <integer> Windows 上不支持。默认为 0o777。
> callback <Function>
   - err <Error>
```

```
  // 创建 /tmp/a/apple 目录，无论是否存在 `/tmp` 和 /tmp/a 目录。
  fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
  });
```

## 4.6 删除文件 fs.unlink(path, callback)

```
> path <string> | <Buffer> | <URL>
> callback <Function>
  - err <Error>
```
异步地删除文件或符号链接.fs.unlink() 不能删除目录。 要**删除目录，请使用 fs.rmdir()**。

## 4.7 删除目录 fs.rmdir(path, callback)

```
> path <string> | <Buffer> | <URL>
> callback <Function>
  - err <Error>
```
在文件（而不是目录）上使用 fs.rmdir() 会导致错误。

## 4.8 fs.rename(oldPath, newPath, callback)

```
> oldPath <string> | <Buffer> | <URL>
> newPath <string> | <Buffer> | <URL>
> callback <Function>
    - err <Error>
```

```
fs.rename('旧文件.txt', '新文件.txt', (err) => {
  if (err) throw err;
  console.log('重命名完成');
});
```


## 4.9 监听文件修改fs.watch(filename[, options][, listener])
 
```
> filename <string> | <Buffer> | <URL>
> options <string> | <Object>
    - persistent <boolean> 指示如果文件已正被监视，进程是否应继续运行。默认为 true。
    - recursive <boolean> 指示是监视所有子目录，还是仅监视当前目录。适用于监视目录时，仅适用于受支持的平台（参阅注意事项）。默认为 false。
    - encoding <string> 指定用于传给监听器的文件名的字符编码。默认为 'utf8'。
> listener <Function> | <undefined> 默认为 undefined。
    -eventType <string>
    -filename <string> | <Buffer>
返回: <fs.FSWatcher>
```

第二个参数是可选的。如果 options 是字符串，则它指定 encoding。 否则 options 应是对象。
监听器回调有两个参数 (eventType, filename)。 eventType 是 'rename' 或 'change'，filename 是触发事件的文件的名称

 ## 4.10 监听文件修改fs.watchFile(filename[, options], listener)   
 
```
>  filename <string> | <Buffer> | <URL>
>  options <Object>
  - persistent <boolean> 默认为 true。
  - interval <integer> 默认为 5007。
>  listener <Function>
  - current <fs.Stats>
  - previous <fs.Stats>
  
```

options 参数可以省略。 如果提供，则它应该是一个对象。 options 对象可以包含一个名为 persistent 的布尔值，指示当文件正在被监视时，进程是否应该继续运行。     
options 对象可以指定 interval 属性，指示轮询目标的频率（以毫秒为单位）。    
listener 有两个参数，当前的 stat 对象和之前的 stat 对象


  
  
  
  
 
 
 
 
 