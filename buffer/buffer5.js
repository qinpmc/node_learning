var srcBuuffer = new Buffer([4,5]);
var tarBuffer = new Buffer(6);

tarBuffer[0] =1;
tarBuffer[1] =2;
tarBuffer[2] =3;

srcBuuffer.copy(tarBuffer,3,0,3); // 第一个参数：目标buffer；第二个参数：目标buffer的起始位置；
// 第三个参数： 源buffer的起始位置；第四个参数： 源buffer的结束位置
console.log(tarBuffer); //<Buffer 01 02 03 04 05 00>