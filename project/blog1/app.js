const handleBlogRouter = require("./src/router/blog")
const handleUserRouter = require("./src/router/user")
const querystring = require("querystring")

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
            blogResult.then((blogData) =>{
                res.end(JSON.stringify(blogData))
            })
            return
        }



        //处理user 路由
        const userData = handleUserRouter(req, res)
        if (userData) {
            res.end(JSON.stringify(userData))
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