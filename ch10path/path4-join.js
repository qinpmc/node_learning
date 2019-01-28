var path = require("path");

var joinedPath = path.join("C:\\dir","\\test","","son\\dest");
console.log(joinedPath); // C:\dir\test\son\dest


var joinedPath2 = path.join("/dir","/test","","/son/dest");
console.log(joinedPath2); // \dir\test\son\dest
