var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    //
    var filePath = './lantern-installer.exe';
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
        res.write(data);
    });

    res.on('drain', function() {
        console.log('drain event fired.');
    });


/*    readStream.on('data', function(data) {
        if(!res.write(data)){
            readStream.pause();
        }
    });

    res.on('drain', function() {
        readStream.resume();
    });*/

    readStream.on('end', function() {
        res.end();
    });
}).listen(3000,function(){
    setInterval(function(){
        var memoryUsage = process.memoryUsage();
        // 用这个格式是为了方便我使用 Markdown 生成表格导入到 Numbers
        console.log('| %s | %s | %s |', memoryUsage.rss, memoryUsage.heapTotal, memoryUsage.heapUsed);
    }, 1000);
});
