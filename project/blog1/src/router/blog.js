const { getList,newBlog,getDetail } = require("../controller/blog")
const { SuccessModel,ErrorModel} = require("../model/resModel")



const handleBlogRouter = (req,res) =>{
    const method = req.method
    const url = req.url;
    const path = url.split("?")[0];
    console.log(req.url)

    //获取博客列表接口
    if(method=== "GET" && path === "/api/blog/list"){
        const author = req.query.author || ""
        const keyword = req.query.keyword || ""
        const listData = getList(author,keyword)
        
        return new SuccessModel(listData)
    }

    //获取博客详情
    if(method=== "GET" && path === "/api/blog/detail"){
        const id = req.query.id
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    //新建一篇博客
    if(method=== "POST" && path === "/api/blog/new"){
        const data = newBlog(req.body);
        return new SuccessModel(data)
    }

    //更新一篇博客
    if(method=== "POST" && path === "/api/blog/update"){
        return {
            msg:"更新一篇博客接口"
        }
    }

    //删除一篇博客
    if(method=== "POST" && path === "/api/blog/del"){
        return {
            msg:"删除一篇博客接口"
        }
    }
}

module.exports = handleBlogRouter