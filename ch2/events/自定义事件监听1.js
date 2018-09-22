function Person(name){
    this.name =name;
    this._events = {}
}

// 注册
Person.prototype.on = function (eventName,cb) {
    if(this._events[eventName]){
        this._events[eventName].push(cb);
    }else{
        this._events[eventName] = [cb];
    }
}

//触发事件
Person.prototype.emit = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);//存储传入参数，不含第一个参数事件名称
    var events = this._events[eventName];
    var self = this;
    if(events){
        events.forEach(function(event){
            event.apply(self,args);
        })
    }
}

var p1 = new Person("ppp1");

p1.on("长发及腰",function(){
    console.log("娶吗");
    console.log(arguments);
})
p1.on("长发及腰",function(){
    console.log("撩吗");
    console.log(arguments);
})

p1.emit("长发及腰","骚年");






