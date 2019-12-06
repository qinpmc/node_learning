const loginCheck = (username,pwd) =>{
    if(username=="zhangsan" && pwd==123){
        return true;
    }
    return false;
}

module.exports = {
    loginCheck
}