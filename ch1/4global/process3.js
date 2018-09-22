console.log(process.cwd()); //f:\notes\node\node_learning1\ch1\4global
console.log(__dirname);     //f:\notes\node\node_learning1\ch1\4global

process.chdir("../"); //改变当前工作目录


console.log(process.cwd());  //f:\notes\node\node_learning1\ch1
console.log(__dirname);      //f:\notes\node\node_learning1\ch1\4global
