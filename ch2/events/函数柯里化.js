function eat(times,cb){
    times = --times;
    return function () {
        times = times-1;
        if(--times==0){
            cb();
        }
    }
}
var newEat = eat(5,function(){
    console.log("eat done");
})

newEat();
newEat();
newEat();
newEat();
newEat();