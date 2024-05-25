async function pingRequest(req, res) {
    //Every controller function have access to a fastify object =>(this)
    const ans = await this.testService.pingcheck();//this testService is the keyname passed to the decorate function.
    return res.send({ data: ans });
}
module.exports = {
    pingRequest
}