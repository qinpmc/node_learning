var path = require("path");

console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); //  \foo\bar\baz\asdf
console.log(path.normalize('/foo/bar//baz/asdf/quux')); //  \foo\bar\baz\asdf\quux
console.log(path.normalize('/foo/bar//baz/asdf/quux/.')); //  \foo\bar\baz\asdf\quux
console.log(path.normalize('/foo/bar//baz/asdf/quux/idex.html')); //  \foo\bar\baz\asdf\quux\idex.html