var fs = require("fs");

fs.readFile("1.txt",function(err,data){ //异步IO操作
    console.log(data.toString());
});

process.nextTick(function(){
    console.log("nextTickA-1");
    process.nextTick(function(){
        console.log("nextTickA-2");
    });
});

setTimeout(function(){
    console.log("setTimeout");
},0);

setImmediate(function(){
    console.log("setImmediateA-1");
    setImmediate(function(){
        console.log("setImmediateA-2");
    })
})

/*
优先级
nextTick > setTimeout > setImmediate > 异步IO操作

*/
