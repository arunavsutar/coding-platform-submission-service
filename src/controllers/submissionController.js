async function pingRequest(req, res) {
    //Every controller function have access to a fastify object =>(this)
    const ans = await this.submissionService.pingcheck();//this testService is the keyname passed to the decorate function.
    return res.send({ data: ans });
}
async function createSubmission(req,res){
    const ans =await this.submissionService.createSubmission(req.body);
    return res.send(ans);
}
module.exports = {
    pingRequest,
    createSubmission
}