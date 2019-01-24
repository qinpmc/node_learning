// 向可写流中写入数据一百万次。
// 留意背压（back-pressure）。
function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 100000 ;
    write();
    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                // 最后一次写入。
                writer.write(data, encoding, callback);
            } else {
                // 检查是否可以继续写入。
                // 不要传入回调，因为写入还没有结束。
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // 被提前中止。
            // 当触发 'drain' 事件时继续写入。
            console.log("****************************");
            writer.once('drain', write);
        }
    }
}

var writer = process.stdout;
var data = "hello";
var encoding = "utf8";
writeOneMillionTimes(writer,data,encoding,function(){
    console.log("over: "+ data);
})