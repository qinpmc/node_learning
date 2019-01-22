const buf = Buffer.from('buffer');

for (const value of buf.values()) {
    console.log(value);
}
// 输出:
//   98
//   117
//   102
//   102
//   101
//   114
console.log("*********************");
for (const key of buf.keys()) {
    console.log(key);
}
// 0
// 1
// 2
// 3
// 4
// 5
console.log("*********************");
for (const pair of buf.entries()) {
    console.log(pair);
}

/*
    [ 0, 98 ]
    [ 1, 117 ]
    [ 2, 102 ]
    [ 3, 102 ]
    [ 4, 101 ]
    [ 5, 114 ]*/

