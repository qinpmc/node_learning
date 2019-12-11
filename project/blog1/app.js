const handleBlogRouter = require("./src/router/blog")
const handleUserRouter = require("./src/router/user")
const querystring = require("querystring")

const getCookieExpires = () =>{
    const d = new Date()
    d.setTime(d.getTime() + (24*60*60*1000))
    return d.toGMTString()
}

//session数据
const SESSION_DATA = {}

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({})
            return
        }
        if (req.headers["content-type"] !== "application/json") {
            resolve({})
            return
        }

        let postData = ""
        req.on("data", chunk => {
            postData += chunk.toString()
        })
        req.on("end", () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise;

}


const serverHandle = (req, res) => {
    res.setHeader("Content-type", "application/json");

    //获取path
    const url = req.url
    req.path = url.split("?")[0]  //将path数据绑定到req的path属性

    //解析query
    req.query = querystring.parse(url.split("?")[1]) //将query数据绑定到req的query属性

    //解析cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ""
    cookieStr.split(";").forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split("=")
        const key = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] = val
    });


    //解析session
    let userId = req.cookie.userid
    let needSetCookie = false
    if(userId){
        if(!SESSION_DATA[userId]){ //为空进行初始化
            SESSION_DATA[userId] = {}
        }
    }else{
        needSetCookie = true // cookie中没有 userId，设置该cookie
        userId = `${Date.now()}_${Math.random()}`
        SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]



    getPostData(req).then(postData => {

        //将post数据绑定到req的body属性
        req.body = postData;


        // 处理blog 路由
        // const blogData = handleBlogRouter(req, res)
        // if (blogData) {
        //     res.end(JSON.stringify(blogData))
        //     return
        // }

        const blogResult = handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then((blogData) => {

                if(needSetCookie){
                    res.setHeader("Set-Cookie",`userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
                }

                res.end(JSON.stringify(blogData))
            })
            return
        }



        //处理user 路由
        const userRes = handleUserRouter(req, res)
        if (userRes) {
            userRes.then(userData => {

                if(needSetCookie){
                    res.setHeader("Set-Cookie",`userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
                }

                if (userData) {
                    res.end(JSON.stringify(userData))
                }
            })
            return
        }



        //未命中路由
        res.writeHead(404, { "Content-type": "text/plain" })
        res.write("404 Not Found\n")
        res.end()
    })



}

module.exports = serverHandle

//env:process.env.NODE_ENV