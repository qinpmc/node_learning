var fs = require("fs");

var fd = fs.readdir("../../node_learning",function(err,files){
/*    for(var i=0;i<files.length;i++){
        console.log(files[i]);
    }*/
})
//console.log(fd); //undefined

var fd2 = fs.readdir("../../node_learning",{withFileTypes:true},function(err,files){
    for(var i=0;i<files.length;i++){
        console.log(files[i]);
    }
})
console.log(fd2); //undefined