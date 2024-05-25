const testRoute = require("./testRoute/test.routes");

async function v1Route(fastify,options){
    fastify.register(testRoute,{prefix:'/test'})
}
module.exports=v1Route