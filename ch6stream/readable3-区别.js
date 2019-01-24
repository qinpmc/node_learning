var Readable = require('stream').Readable;
var rs = new Readable();
var c = 97;
rs._read = function(){
    rs.push(String.fromCharCode(c++));
    if (c > 'd'.charCodeAt(0)) rs.push(null);
}
// 1:
rs.on("readable", function(){
    data = rs.read();
    console.log("readable: " + data); //readable: ab  readable: cd
});

//rs.on("data", function(chunk){
//    console.log(chunk.toString());  // a b c d
//});




