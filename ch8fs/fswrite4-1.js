var fs = require("fs");

/*fs.writeFile("write1.txt","第一次写入",function(err){
    if(err) throw err;
    fs.writeFile("write1.txt","第二次",function(err){
        if(err) throw err;  // 此时文件内容为 "第二次"
    })
})*/

try{
    fs.writeFileSync("write1.txt","第三次");
}catch (e){
    console.log(e);
}
