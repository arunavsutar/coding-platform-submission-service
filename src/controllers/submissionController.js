const { StatusCodes } = require("http-status-codes");
async function pingRequest(req, res) {
    //Every controller function have access to a fastify object =>(this)
    const ans = await this.submissionService.pingcheck();//this testService is the keyname passed to the decorate function.
    return res.send({ data: ans });
}
async function createSubmission(req,res){
    const ans =await this.submissionService.createSubmission(req.body);
    return res.status(StatusCodes.CREATED).send({
        success:true,
        message:"Code Submitted Successfully",
        error:{},
        data:ans
    });
}
async function updateSubmission(req,res){
    
}
module.exports = {
    pingRequest,
    createSubmission
}