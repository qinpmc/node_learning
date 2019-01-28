var path = require("path");

console.log(path.resolve('/foo/bar', './baz'));
// 返回: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// 返回: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// 如果当前工作目录是 /home/myself/node，则返回 F:\notes\node\node_learning\ch10path\wwwroot\static_files\gif\image.gif