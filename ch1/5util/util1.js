var util = require("util");
var obj1 = {
    age:31,
    addr:{
        province:{
            hb:{
                city:"wh"
            }
        }
    }
}
console.log(util.inspect(obj1));//  { age: 31, addr: { province: { hb: [Object] } } }

/*
* obj :对象
* showHidden  : 是否显示隐藏属性
* depth：对象递归显示深度
* colors：是否显示颜色
* */
console.log(util.inspect(obj1,true,3,true)); //{ age: 31, addr: { province: { hb: { city: 'wh' } } } }

//////////////////////////////////////////////

function Parent(){
    this.name = "parent"
};
Parent.prototype.showName = function(){
    console.log(this.name);
}

function Child(){
    this.name = "child";
};

//Child.prototype = Object.create(Parent.prototype)

util.inherits(Child,Parent);

var child1= new Child();

console.log(util.inspect(child1,true,3,true)); //Child { name: 'child' }

