var fs = require("fs");

fs.open("./write1.txt","r",function(err,fd){
    if(err) throw err;
    console.log(fd);  //3
    fs.fstat(fd,function(err,stats){
        if(err) throw err;
        console.log(stats);
        fs.close(fd,function(err){
            if (err) throw err;
        })
    })

})


/*
fs.open("./write2.txt","r",function(err,fd){  // 打开不存在的文件，报错
    if(err) throw err;
    console.log(fd);  //
})*/
