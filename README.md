This is a simple nodejs learning note.

nodejs prefix（全局）和cache（缓存）windows下设置：
npm config set prefix "C:\Program Files\nodejs\node_global"
npm config get prefix ：查询全局路径

npm config set cache "C:\Program Files\nodejs\node_cache"

恢复默认值：方法是删除C:\Users\gis\.npmrc这个文件。 （gis为用户名）


node 调试:

- npm install -g node-inspect
- node --inspect app.js

如果想让代码在第一行就停下来,等待调试也可以使用

- node --inspect-brk app.js

- 在Chrome中打开chrome://inspect/#devices



 