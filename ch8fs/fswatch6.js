var fs = require("fs");
var watcher =  fs.watch("../ch8fs",{recursive:true},function(type,filname){
    console.log(filname+" : "+type);
});

watcher.on("change",function(type,filename){
    console.log("watcher on change...")
})
