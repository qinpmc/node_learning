## file

### 方法
- readFile
- readFileSync ,同步读取

  源码中flag选项：
  O_READONLY : 只读
  O_SYNC : 同步
  O_RDWR : 可读可写
  O_TRUNC ：可truncate 清空
  O_CREATE :创建
  O_WRONLY :只写
  O_EXCEL : excludsive 排它操作
  O_APPEND :追加

```
1. fs.readFile("sample1.txt","utf-8",function (err,data) {}
2. var data = fs.readFileSync("sample1.txt","utf-8");
3.
var buffer = new Buffer(20);
var fd = fs.openSync("sample1.txt","r");

/*
 fd 文件描述符
 buffer 存放数据的容器
 offset 往buffer中的偏移量
 length 长度
 position 文件的当前读取位置
 */
fs.readSync(fd,buffer,0,10,5);
console.log(buffer.toString()); //is sample1 ;原文为： This is sample1 txt ..
```


fs.writeFile("output1.txt","This is output data",function (err) {}
fs.writeFileSync('output1.txt',"This is output data");
fs.writeFile("output1.txt","我是追加内容",{flag:"a",encoding:"utf-8"},function (err) {}
fs.appendFile("output1.txt",new Buffer("我是追加内容222"));
fs.appendFile("output1.txt","我是追加内容333");

```
fs.open("out2.txt","w", function (err,fd) {
    fs.write(fd,buffer,9,9,9,function(err,bytesWritten){
        console.log(bytesWritten);
        fs.write(fd,buffer,0,9,0,function(err,bytesWritten){
            console.log(buffer.toString()); ///要写入的内容
        })
    })
})
/*
  fd : 文件描述
  buffer :写入的内容
  offset buffer中的偏移量
  length 长度
  position 文件的写入的位置
  callback ：回调函数
 */
```
