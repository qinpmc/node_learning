const { getList,newBlog,getDetail,updateBlog,delBlog} = require("../controller/blog")
const { SuccessModel,ErrorModel} = require("../model/resModel")



const handleBlogRouter = (req,res) =>{
    const method = req.method
    const url = req.url;
    const path = url.split("?")[0];
    console.log(req.url)
    const id = req.query.id

    //获取博客列表接口
    if(method=== "GET" && path === "/api/blog/list"){
        const author = req.query.author || ""
        const keyword = req.query.keyword || ""
        
        // const listData = getList(author,keyword)
        // return new SuccessModel(listData)
        
        const result = getList(author,keyword)
        return result.then((listData) =>{
            return new SuccessModel(listData)
        })

    }

    //获取博客详情
    if(method=== "GET" && path === "/api/blog/detail"){
        // const data = getDetail(id);
        // return new SuccessModel(data)
        const result = getDetail(id);
        return result.then((data)=>{
            return new SuccessModel(data)
        })

    }

    //新建一篇博客
    if(method=== "POST" && path === "/api/blog/new"){
        const result = newBlog(req.body);
        return result.then((data) =>{
            return new SuccessModel(data)
        })


        
    }

    //更新一篇博客
    if(method=== "POST" && path === "/api/blog/update"){
        
        const res = updateBlog(id,req.body);
        return res.then(data =>{
            if(data){
                return new SuccessModel()
            }else{
                return  new ErrorModel("更新失败")
            }
        })


       
    }

    //删除一篇博客
    if(method=== "POST" && path === "/api/blog/del"){
        const res = delBlog(id);
        if(res){
            return new SuccessModel()
        }else{
            return  new ErrorModel("删除失败")
        }
    }
}

module.exports = handleBlogRouter