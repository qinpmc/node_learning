
- 问题记录1：
数据库使用mysql，客户端使用mysql workbench，更新数据如下：
update users set realname='李四2' where username='lisi';
此时workbench提示失败.
- 解决措施： SET SQL_SAFE_UPDATES = 0


- 问题记录2：
使用mysql数据库后，运行 npm run dev,出现以下错误：

```
...\blog1\node_modules\mysql\lib\protocol\Parser.js:437
      throw err; // Rethrow non-MySQL errors
      ^

Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```
- 解决措施

```
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;(注释：此句应该可忽略-未尝试)
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
FLUSH PRIVILEGES;
```


## redis 安装
 
- 1 下载 Redis-x64-3.2.100.zip，下载地址： https://github.com/MSOpenTech/redis/releases
- 2 解压Redis-x64-3.2.100.zip，在E:\qinpmc\software
- 3 环境变量path中添加 E:\qinpmc\software\Redis-x64-3.2.100
- 4 验证：cmd窗口运行： redis-server.exe， 窗口出现 Server started, Redis version 3.2.100代表启动成功 
  另启一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端，运行 ： redis-cli.exe，窗口窗口出现 127.0.0.1:6379>，代表成功进入

