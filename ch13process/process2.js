process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
process.on('beforeExit', function(code) {
    console.log('beforeExit:', code);
});

console.log("程序执行结束");
//process.exit();   // 添加此句会使得beforeExit 不触发