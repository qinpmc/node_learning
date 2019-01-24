# Stream
流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。Node.js 提供了多种流对象。 例如，HTTP 服务器的请求和 process.stdout 都是流的实例。
**流可以是可读的、可写的、或者可读可写的。所有的流都是 EventEmitter 的实例**。

Node.js 中有四种基本的流类型：
- Writable - 可写入数据的流（例如 fs.createWriteStream()）。
- Readable - 可读取数据的流（例如 fs.createReadStream()）。
- Duplex - 可读又可写的流（例如 net.Socket）。
- Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。



## 1 基本概念

### 1.1 对象模式

Node.js 创建的流都是运作在字符串和 Buffer（或 Uint8Array）上。 当然，流的实现也可以使用其它类型的 JavaScript 值（除了 null）。 这些流会以“对象模式”进行操作。
当创建流时，可以使用 objectMode 选项把流实例切换到对象模式。 将已存在的流切换到对象模式是不安全的。

### 1.2 缓冲

可写流和可读流都会在内部的缓冲器中存储数据，可以分别使用的 writable.writableBuffer 或 readable.readableBuffer 来获取。
可缓冲的数据大小取决于传入流构造函数的 highWaterMark 选项。 对于普通的流，highWaterMark 指定了**字节的总数**。 对于对象模式的流，highWaterMark 指定了**对象的总数**。
当调用 stream.push(chunk) 时，数据会被缓冲在可读流中。 如果流的消费者没有调用 stream.read()，则数据会保留在内部队列中直到被消费。
一旦内部的可读缓冲的总大小达到 highWaterMark 指定的阈值时，流会暂时停止从底层资源读取数据，直到当前缓冲的数据被消费 （也就是说，流会停止调用内部的用于填充可读缓冲的 readable._read()）。
当调用 writable.write(chunk) 时，数据会被缓冲在可写流中。 当内部的可写缓冲的总大小小于 highWaterMark 设置的阈值时，调用 writable.write() 会返回 true。
一旦内部缓冲的大小达到或超过 highWaterMark 时，则会返回 false。
stream API 的主要目标，特别是 stream.pipe()，是为了限制数据的缓冲到可接受的程度，也就是读写速度不一致的源头与目的地不会压垮内存。

## 2 可读流
可读流是对提供数据的来源的一种抽象。
可读流的例子包括：
- 客户端的 HTTP 响应
- 服务器的 HTTP 请求
- fs 的读取流
- zlib 流
- crypto 流
- TCP socket
- 子进程 stdout 与 stderr
- process.stdin
所有可读流都实现了 stream.Readable 类定义的接口。

### 2.1 可读流模式

可读流运作于两种模式之一：**流动模式（flowing）或暂停模式（paused）**。
- 在流动模式中，数据**自动从底层系统读取**，并通过 EventEmitter 接口的事件尽可能快地被提供给应用程序。
- 在暂停模式中，必须**显式调用 stream.read() 读取数据块**。
- **所有可读流都开始于暂停模式**，可以通过以下方式切换到流动模式：
1. 添加 'data' 事件句柄。
2. 调用 stream.resume()。
3. 调用 stream.pipe()。

- 可读流可以通过以下方式切换回暂停模式：
1. 如果没有管道目标，则调用 stream.pause()。
2. 如果有管道目标，则移除所有管道目标。调用 stream.unpipe() 可以移除多个管道目标。
3. 只有提供了消费或忽略数据的机制后，可读流才会产生数据。 如果消费的机制被禁用或移除，则可读流会停止产生数据。

注意：
1. 为了向后兼容，移除 'data' 事件句柄不会自动地暂停流。 如果有管道目标，一旦目标变为 drain 状态并请求接收数据时，则调用 stream.pause() 也不能保证流会保持暂停模式。
2. 如果可读流切换到流动模式，且没有可用的消费者来处理数据，则数据将会丢失。 例如，当调用 readable.resume() 时，没有监听 'data' 事件或 'data' 事件句柄已移除。
3. 添加 'readable' 事件句柄会使流自动停止流动，并通过 readable.read() 消费数据。 如果 'readable' 事件句柄被移除，且存在 'data' 事件句柄，则流会再次开始流动。


### 2.2 三种状态
可读流的两种模式是对发生在可读流中更加复杂的内部状态管理的一种简化的抽象。
在任意时刻，可读流会处于以下三种状态之一：
> readable.readableFlowing === null
> readable.readableFlowing === false
> readable.readableFlowing === true

1. 当 readable.readableFlowing 为 null 时，没有提供消费流数据的机制，所以流不会产生数据。
在这个状态下，监听 'data' 事件、调用 readable.pipe()、或调用 readable.resume() 都会使 readable.readableFlowing 切换到 true，可读流开始主动地产生数据并触发事件。

2. 调用 readable.pause()、readable.unpipe()、或接收到背压，则 readable.readableFlowing 会被设为 false，暂时停止事件流动但不会停止数据的生成。
**在这个状态下，为 'data' 事件绑定监听器不会使 readable.readableFlowing 切换到 true**

```
const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);
// readableFlowing 现在为 false。

pass.on('data', (chunk) => { console.log(chunk.toString()); });
pass.write('ok'); // 不会触发 'data' 事件。
pass.resume(); // 必须调用它才会触发 'data' 事件。
```
详见 readable1.js

### 2.3 stream.Readable

#### 2.3.1 事件

1. 'close' 事件
2. 'data' 事件
当流将数据块传送给消费者后触发。 当调用 readable.pipe()，readable.resume() 或绑定监听器到 'data' 事件时，**流会转换到流动模式**.
当调用 readable.read() 且有数据块返回时，也会触发 'data' 事件.

> 回调函数参数：chunk <Buffer> | <string> | <any> 数据块
> 如果使用 readable.setEncoding() 为流指定了默认的字符编码，则监听器回调传入的数据为 字符串  ，否则传入的数据为 Buffer。

3. 'end' 事件
当流中没有数据可供消费时触发.

4. 'error' 事件
当流因底层内部出错而不能产生数据、或推送无效的数据块时触发.

5. 'readable' 事件
当流中有数据可供读取时触发.当到达流数据的尽头时，'readable' 事件也会触发，但是在 'end' 事件之前触发.


**readable 与 data 事件区别**

1. 模式不同
- 只要缓存中存在数据，就会不断触发readable事件，该事件中通过rs.read()来读取缓存中的数据，同时将数据从缓存中清除，直到rs.read()读取到了null，
说明缓存中已经没有数据，则停止触发该事件
- data 事件绑定后，可读流的模式将会转变为流动模式，数据的将会由程序自行读取，无需手动调用。，因此无需我们自己调用read()就可以获取到数据chunk，注意这个数据是Buffer类型的。
2. 读取到的数据方式不同
如下，readable，read()读取到的可能是push了几遍后的数据。而data事件则会源源不断读入

```
var Readable = require('stream').Readable;
var rs = new Readable();
var c = 97;
rs._read = function(){
    rs.push(String.fromCharCode(c++));
    if (c > 'd'.charCodeAt(0)) rs.push(null);
}
// 1:
rs.on("readable", function(){
    data = rs.read();
    console.log("readable: " + data); //readable: ab  readable: cd
});

//rs.on("data", function(chunk){
//    console.log(chunk.toString());  // a b c d
//});
```
详见readable3-区别.js

#### 2.3.2 方法

1. readable.setEncoding(encoding)
 > encoding <string> 字符编码。
 > 返回: <this>

为从可读流读取的数据设置字符编码。默认情况下没有设置字符编码，流数据返回的是 Buffer 对象。 如果设置了字符编码，则流数据返回指定编码的字符串

2. readable.destroy([error])
> error <Error> 传给 'error' 事件的错误对象。

 返回: <this>,销毁流，并触发 'error' 事件和 'close' 事件。

3. readable.pause()
使流动模式的流停止触发 'data' 事件，并**切换出流动模式**。

4. readable.isPaused()
5. readable.pipe(destination[, options])
> destination <stream.Writable> 数据写入的目标。
> options <Object> 选项。
> end <boolean> 当读取器结束时终止写入器。默认为 true。

返回: <stream.Writable> 目标可写流，如果是 Duplex 流或 Transform 流则可以形成管道链。
将可读流**自动切换到流动模式**，并将可读流的所有数据推送到绑定的可写流。 数据流会被自动管理，所以即使可读流更快，目标可写流也不会超负荷

6. readable.read([size])
> size <number> 要读取的数据的字节数。

返回: <string> | <Buffer> | <null> | <any>
从内部缓冲拉取并返回数据。 如果没有可读的数据，则返回 null。 默认情况下，readable.read() 返回的数据是 Buffer 对象，除非使用 readable.setEncoding() 指定字符编码或流处于对象模式。
如果可读的数据不足 size 个字节，则返回内部缓冲剩余的数据，如果流已经结束则返回 null

7. readable.resume()
将被暂停的可读流恢复触发 'data' 事件，并**将流切换到流动模式**。

8. readable.unpipe([destination])
> destination <stream.Writable> 要移除管道的可写流。

返回: <this>。解绑之前使用 stream.pipe() 绑定的可写流。如果没有指定 destination, 则解绑所有管道.将流**换回暂停模式**。



## 3 Writable
可写流是对数据要被写入的目的地的一种抽象。
可写流的例子包括：
- 客户端的 HTTP 请求
- 服务器的 HTTP 响应
- fs 的写入流
- zlib 流
- crypto 流
- TCP socket
- 子进程 stdin
- process.stdout、process.stderr


### 3.1 事件

1. 'close' 事件
当流或其底层资源（比如文件描述符）被关闭时触发。表明不会再触发其他事件，也不会再发生操作。

2. 'drain' 事件
如果调用 stream.write(chunk) 返回 false，则当可以继续写入数据到流时会触发 'drain' 事件。
详见 writable5-drain.js

3. 'error' 事件
> <Error>

当写入数据发生错误时触发。当触发 'error' 事件时，流还未被关闭。

4. 'finish' 事件
调用 stream.end() 且缓冲数据都已传给底层系统之后触发。

5. 'pipe' 事件
> src <stream.Readable> 通过管道流入到可写流的来源流。

当在可读流上调用 stream.pipe() 时触发.

6. 'unpipe' 事件
> src <stream.Readable> 被移除可写流管道的来源流。

当在可读流上调用 stream.unpipe() 时触发.
详见 writable6.js


### 3.2 方法

1. writable.cork()

强制把所有写入的数据都缓冲到内存中。 当调用 stream.uncork() 或 stream.end() 时，缓冲的数据才会被输出。
当写入大量小块数据到流时，内部缓冲可能失效，从而导致性能下降，writable.cork() 主要用于避免这种情况。
对于这种情况，实现了 writable._writev() 的流可以用更优的方式对写入的数据进行缓冲。


2. writable.destroy([error])

> error <Error>

  返回: <this>。销毁流，并触发 'error' 事件且传入 error 参数。 调用该方法后，可写流就结束了，之后再调用 write() 或 end() 都会导致 ERR_STREAM_DESTROYED 错误。

3. writable.end([chunk][, encoding][, callback])

> chunk <string> | <Buffer> | <Uint8Array> | <any> 要写入的数据。 对于非对象模式的流chunk 必须是字符串、Buffer、或 Uint8Array。 对于对象模式的流， chunk 可以是任何 JavaScript 值，除了 null。
> encoding <string> 如果 chunk 是字符串，则指定字符编码。
> callback <Function> 当流结束时的回调函数。

返回: <this>.调用 writable.end() 表明已没有数据要被写入可写流。果传入了 callback 函数，则会做为监听器添加到 'finish' 事件。


4. writable.setDefaultEncoding(encoding)

5. writable.uncork()
将调用 stream.cork() 后缓冲的所有数据输出到目标。
当使用 writable.cork() 和 writable.uncork() 来管理流的写入缓冲时，建议使用 process.nextTick() 来延迟调用 writable.uncork();
如果一个流上多次调用 writable.cork()，则必须调用同样次数的 writable.uncork() 才能输出缓冲的数据。

详见 writable7.js

6. writable.write(chunk[, encoding][, callback])
> chunk <string> | <Buffer> | <Uint8Array> | <any> 要写入的数据。  对于非对象模式的流chunk 必须是字符串、Buffer 或 Uint8Array。 对于对象模式的流，chunk 可以是任何 JavaScript 值，除了 null。
> encoding <string> 如果 chunk 是字符串，则指定字符编码。
> callback <Function> 当数据块被输出到目标后的回调函数。

返回: <boolean>。在接收了 chunk 后，如果内部的缓冲小于创建流时配置的 highWaterMark，则返回 true 。 如果返回 false ，则应该停止向流写入数据，直到 'drain' 事件被触发，触发才能继续写入更多数据。



