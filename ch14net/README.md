# Net

## 1 net.Server 类
用于创建 TCP 或 IPC server.

## 1.1 事件

1. 'close' 事件
当server关闭的时候触发. 注意,如果有连接存在, 直到所有的连接结束才会触发这个事件.

2. 'connection' 事件

```
<net.Socket> connection 对象
```
当一个新的connection建立的时候触发. socket 是一个 net.Socket的实例对象.

3. 'error' 事件

```
<Error>
```
当错误出现的时候触发. 不同与 net.Socket, 'close' 事件不会在这个事件触发后继续触发 除非 server.close() 是手动调用. 在 server.listen()中的例子.


4. 'listening' 事件#
当服务被绑定后调用 server.listen().

## 1.2 属性

1. server.maxConnections
设置该属性使得当 server 连接数过多时拒绝连接


## 1.3 方法
1. server.address()
返回一个有 port, family, 和 address 属性: { port: 12346, family: 'IPv4', address: '127.0.0.1' }的对象

2. server.close([callback])
停止 server接受建立新的connections并保持已经存在的connections.此功能是异步的,当所有的connections关闭同时server响应 'close'事件的时候,server将会最终关闭.
 一旦'close'发生将会调用可选的回调函数. 与该事件不同, 如果服务器在关闭时未打开，则将使用错误作为唯一参数。

3. server.getConnections(callback)

```
Returns <net.Server>
```
异步获取服务器的当前并发连接数。当 socket 被传递给子进程时工作。
回调函数的两个参数是 err 和 count。


## 2 net.Socket 类
这个类是 TCP 或 UNIX Socket 的抽象（在Windows上使用命名管道，而UNIX使用域套接字）。一个net.Socket也是一个duplex stream
- net.Socket可以被用户创建并直接与server通信。举个例子，它是通过**net.createConnection()返回**的，所以用户可以使用它来**与server通信**。
- 当一个连接被接收时，它也能被Node.js创建并传递给用户。比如，它是**通过监听在一个net.Server上的'connection'事件触发而获得**的，那么用户可以使用它来**与客户端通信**。

## 2.1 事件

1. 'close' 事件

```
had_error <boolean> 如果 socket 有传输错误就为 true。
```

一旦 socket 完全关闭就发出该事件。参数 had_error 是 boolean 类型，表明 socket 被关闭是否取决于传输错误。

2. 'connect' 事件

当一个 socket 连接成功建立的时候触发该事件。 查看 net.createConnection()。

3. 'data' 事件

```
<Buffer>
```

当接收到数据的时触发该事件。data 参数是一个 Buffer 或 String。数据编码由 socket.setEncoding() 设置。









