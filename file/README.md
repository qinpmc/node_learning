## file

### 方法

- readFile / readFileSync    将文件整体读入缓存区
- writeFile / writeFileSync  将数据完整写入文件
- read / readSync            将文件部分读入缓存区
- write  / writeSync         将缓存区部分数据写入文件
- fs.stat 获取文件信息


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


var buffer = new Buffer(20);
fs.open("sample1.txt","r",function(err,fd){
    fs.read(fd,buffer,0,10,0,function(err,bytesRead){
        console.log("bytesRead",bytesRead); //bytesRead 10
        fs.read(fd,buffer,10,5,10,function(err,bytesRead){
            console.log("bytesRead",bytesRead); //bytesRead 5
            console.log(buffer.toString()); //This is sample1
        })
    })
});

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

