const getList = (author,keyword) =>{

    return [
        {
            id:"1",
            title:"标题A",
            content:"内容A",
            createTime:1575208494207,
            author:"zhangsan"
        },
        {
            id:"2",
            title:"标题B",
            content:"内容B",
            createTime:1575208494210,
            author:"lisi"
        }
    ]
}

const getDetail = (id) =>{
    return {
        id:id,
        content:"boke"
    }
}


const newBlog = (blogData = {}) =>{
    return {
        id:3  //新建博客
    }
}

module.exports = {
    getList,
    newBlog,
    getDetail
}