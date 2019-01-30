process.argv.forEach((val,index) =>{
    console.log(`${index}: ${val}`);
});

console.log(process.argv0);
process.chdir("../");
console.log(process.cwd()); //F:\notes\node\node_learning


//第一个元素是 process.execPath 第二个元素是当前执行的 JavaScript 文件的路径
/*
0: D:\Program Files\nodejs\node.exe
1: F:\notes\node\node_learning\ch13process\process3
2: one
3: two=three
4: four
D:/Program Files/nodejs/node.exe
*/


