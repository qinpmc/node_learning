var stream = process.stdout;

stream.cork();
stream.write('一些 ');
stream.cork();
stream.write('数据 ');
process.nextTick(() => {
    stream.uncork();
    // 数据不会被输出，直到第二次调用 uncork()。
    stream.uncork();
});