//process.kill(1860);



process.on("exit",function(){ //外部杀死该进程，不执行监听事件
    console.log("退出了。。。");
})




process.on("uncaughtException",function(e){
    console.log("uncaughtException");
})


//故意制造错误，使程序退出；
console.log(error);