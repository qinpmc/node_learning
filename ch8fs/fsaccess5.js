 var fs = require("fs");

 fs.access("../ch8fs",fs.constants.F_OK,function(err){
     console.log(`文件 ${err ?"不存在":"存在"}`); //文件 存在
 })