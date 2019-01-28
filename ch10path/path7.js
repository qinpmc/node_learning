var path = require("path");

console.log(path.resolve("c:\\","\\test\\src","..\\index.html")); // c:\test\index.html

console.log(path.resolve("c:\\","\\test\\src",".\\index.html")); //  c:\test\src\index.html

console.log(path.resolve("\\test\\src",".\\index.html")); //  F:\test\src\index.html


console.log(path.relative("C:\\test\\src","C:\\test\\index.html")) ;  //   ..\index.html


