
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
