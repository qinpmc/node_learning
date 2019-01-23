# Stream

Node.js 中有四种基本的流类型：

- Writable - 可写入数据的流（例如 fs.createWriteStream()）。
- Readable - 可读取数据的流（例如 fs.createReadStream()）。
- Duplex - 可读又可写的流（例如 net.Socket）。
- Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。




### stream.Readable
- 使用实现了stream.Readable 接口的对象，将对象数据读取为流数据，在准备好接收之前，Readable流并不会开始发射数据

fs.ReadStream                读取文件
http.IncomingMessage         客户端的请求或服务端响应
net.Socket tcp               连接中的Socket对象
process.stdin                标准输入流
Gzip                         压缩流
