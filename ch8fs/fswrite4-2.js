var fs = require("fs");

function fileCopy(src,dest,done){
    var fr = fs.createReadStream(src);
    var fw = fs.createWriteStream(dest);
    fr.on("data",function(chunck){
        fw.write(chunck);
    });
    fr.on("error",function(e){
        throw e;
    });
    fr.on("end",function(){
        fw.end();
        if(done) done();
    })
}

fileCopy("./README.md","./README-copy.md");