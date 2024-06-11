const submissionRoute = require("./submission.routes");

async function v1Route(fastify,options){
    fastify.register(submissionRoute,{prefix:'/submission'});
}
module.exports=v1Route