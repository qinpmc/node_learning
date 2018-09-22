
console.log("AAAAAAAAA");

setTimeout(function(){
    console.log("setTimeoutA2");
},0);

process.nextTick(function(){
    console.log("nextTickA2-1");
    process.nextTick(function(){
        console.log("nextTickA2-2");
    });
});

console.log("BBBBBBBBBB");
console.log("CCCCCCCCCC");

/*
AAAAAAAAA
BBBBBBBBBB
CCCCCCCCCC
nextTickA2-1
nextTickA2-2
setTimeoutA2*/
