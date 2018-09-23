var buf1 = new Buffer(12);
buf1.write("中国",0,6); //第一个参数：写入内容，第二个参数：offset；第三个参数：长度；第四个参数：encoding
console.log(buf1.toString()); //中国