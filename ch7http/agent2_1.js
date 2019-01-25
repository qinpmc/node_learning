var delay = [2000, 30, 500];
var i = 0;
require('http').createServer((req, res) => {
    // 为了让请求模拟更真实，会调整每个请求的响应时间
    setTimeout(() => {
    res.end('hello world');
}, delay[i]);
i = (i+1)%(delay.length);
}).listen(3333, () => {
    // listen的回调函数
    console.log('listen at 3333');
});
