var fs = require('fs');

var onEnd = function(){
    process.stdout.write(']');
};

var fileStream = fs.createReadStream('./foo1.txt'); // txt中内容：readable事件和data事件
fileStream.on('end', onEnd)

fileStream.pipe(process.stdout);

process.stdout.write('文件读取完成，文件内容是[');
// 文件读取完成，文件内容是[readable事件和data事件]
