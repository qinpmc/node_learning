var util = require("util");

async function fn(){
    await console.log(1);
    await console.log(2);
    return 3;
}
var callbackFn = util.callbackify(fn);

callbackFn(function(err,res){
    console.log(arguments);
    if(err) throw err;
    console.log(res);
})

/*
上述输出：
1
2
{ '0': null, '1': 3 }
3
*/





/*
fn(); // 输出如下：

//  1
// 2
// Promise {<resolved>: 3}
*/



/*
fn().then(function(res){
    console.log(res);  // 1 2 3
})
*/
