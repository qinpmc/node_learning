var path = require("path");

var pathObj1 = {
    root:"E:\\",    //有dir 会忽略 root
    dir:"C:\\home\\usr\\dir",
    base:"index.html",
    ext:"md",        // 有base 会忽略 ext
    name:"noname"   // 有base 会忽略 name
}

console.log(path.format(pathObj1)); // C:\home\usr\dir\index.html
