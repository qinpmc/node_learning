
const { loginCheck} = require("../controller/user")
const { SuccessModel,ErrorModel} = require("../model/resModel")




const handleUserRouter = (req,res) =>{
    const method = req.method
    const url = req.url;
    const path = url.split("?")[0];

     //登录接口
     //if(method=== "POST" && path === "/api/user/login"){
        //const {username,password} = req.body
    if(method=== "GET" && path === "/api/user/login"){
        const {username,password} = req.query;

        const resulst = loginCheck(username,password);
        return resulst.then(data =>{
            if(data.username){
               //设置 session
               req.session.username = data.username
                req.session.realname = data.realname

                return new SuccessModel({
                    session:req.session
                })
            }  
            return new ErrorModel("登录失败")
        })
    }

    if(method=== "GET" && path === "/api/user/login-test"){
        if(req.session.username){
            return Promise.resolve(
                new SuccessModel({
                    username:req.session.username
                })
            )
        }
        return Promise.resolve(
             new ErrorModel("尚未登录")
        )
    }

}

module.exports = handleUserRouter