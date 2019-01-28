var fs = require("fs");

var rs = fs.createReadStream("./README.md","utf8");

rs.on("data",function(chunk){
    console.log("read: "+chunk);
})
.on("end",function(){
    console.log("end");
})
.on("error",function(err){
    console.log("error: "+err);
})
.on("close",function(){
    console.log("closed");
})
// 先执行end ，后执行 close


