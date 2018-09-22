
console.log(global.process.stdout.write);

process.stdout.write("hello");
process.stdin.on("data",function(data){
    console.log(data.toString());
});

process.argv.forEach(function(val,index,ary){
    console.log(val,index,ary);
})