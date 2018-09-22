var selfModule1 = require("./selfModule1"); //load selfModule1

var selfModule1 = require("./selfModule1"); //只加载一次，此处不输出任何东西

delete require.cache[require.resolve("./selfModule1")];//清楚缓存
var selfModule1 = require("./selfModule1");// load selfModule1

console.log("end...."); //end....
