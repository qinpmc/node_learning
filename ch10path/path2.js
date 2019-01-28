var path = require("path");

console.log(path.basename("/foo/bar/baz/index.html")); // index.html
console.log(path.basename("/foo/bar/baz/index.html",".html"));  // index


console.log(path.dirname(process.cwd())); //  F:\notes\node\node_learning
console.log(path.dirname("/foo/bar/baz/index.html"));  // /foo/bar/baz



console.log(path.extname('index.html'));
// 返回: '.html'

console.log(path.extname('index.coffee.md'));
// 返回: '.md'

console.log(path.extname('index.'));
// 返回: '.'

console.log(path.extname('index'));
// 返回: ''

console.log(path.extname('.index'));
// 返回: ''