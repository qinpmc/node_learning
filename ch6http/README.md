# Http 

Http 主要的类和方法： 

1. http.Agent 类 
Agent 负责管理 HTTP 客户端的连接持久性和重用。 它为给定的主机和端口维护一个待处理请求队列，为每个队列连接重新使用单个套接字连接，直到队列为空，
此时套接字被销毁或放入池中，以便再次用于请求到同一个主机和端口。

2. http.ClientRequest 类
此对象从 http.request() 内部创建并返回。 它表示正在进行的请求，其请求头已进入队列。 请求头仍然可以使用 setHeader(name, value)、getHeader(name) 或 removeHeader(name) 改变。
实际的请求头将与第一个数据块一起发送，或者在调用 request.end() 时发送。
要获得响应，请为请求对象添加 'response' 事件监听器。 收到响应头后，将从请求对象触发 'response' 事件。 'response' 事件有一个参数，该参数是 **http.IncomingMessage的一个实例** 。
在 'response' 事件期间，可以向监听对象添加监听器，比如监听 'data' 事件。
 
3. http.Server 类
此类继承自 net.Server。

4. http.ServerResponse 类
此对象由 HTTP 服务器在内部创建，而不是由用户创建。 它作为第二个参数传递给 'request' 事件。
 
5. http.IncomingMessage 类
IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建，并分别作为第一个参数传递给 'request' 和 'response' 事件。 它可用于访问响应状态、消息头、以及数据。
  
6. http.createServer([options][, requestListener])
**返回新建的 http.Server 实例**。
  
7. http.request(options[, callback])/ http.request(url[, options][, callback])
其参数options有属性agent ：
agent <http.Agent> | <boolean> 控制 **Agent** 的行为。可能的值有： 
    > undefined (默认): 对此主机和端口**默认使用 http.globalAgent**。
    > Agent 对象: 显式使用传入的 Agent。
    >  false: 使用具有默认值的新代理。
callback 只有一个参数，该**参数是 http.IncomingMessage 的实例**。
该方法返回 **http.ClientRequest**.

8. http.get(options[, callback])/http.get(url[, options][, callback])
GET请求的便捷方法，与 http.request() 的唯一区别是它将方法设置为 GET 并自动调用 req.end()。  
callback 只有一个参数，该**参数是 http.IncomingMessage 的实例**。
该方法返回 **http.ClientRequest**.
 

## 1 Http属性

## 1.1



### 1.1.1