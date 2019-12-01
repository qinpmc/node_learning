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

module.exports = {
    getList
}