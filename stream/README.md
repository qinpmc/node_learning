## stream

### stream.Readable
- 使用实现了stream.Readable 接口的对象，将对象数据读取为流数据，在准备好接收之前，Readable流并不会开始发射数据

fs.ReadStream                读取文件
http.IncomingMessage         客户端的请求或服务端响应
net.Socket tcp               连接中的Socket对象
process.stdin                标准输入流
Gzip                         压缩流
