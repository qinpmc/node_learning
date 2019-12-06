
const { loginCheck} = require("../controller/user")
const { SuccessModel,ErrorModel} = require("../model/resModel")


const handleUserRouter = (req,res) =>{
    const method = req.method
    const url = req.url;
    const path = url.split("?")[0];

     //登录接口
     if(method=== "POST" && path === "/api/user/login"){
        const {username,pwd} = req.body
        const res = loginCheck(username,pwd);
        if(res){
            return new SuccessModel()
        }
        return new ErrorModel("登录失败")
    }
}

module.exports = handleUserRouter