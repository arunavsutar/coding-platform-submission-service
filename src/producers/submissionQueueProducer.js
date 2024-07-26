const submissionQueue=require('../queues/submissionQueue');

module.exports=async function (payload){
    try {
        const response=await submissionQueue.add("SubmissionJob",payload);
        console.log("Successfully added a Submission JOB.");
        return response;
    } catch (error) {
        throw new ConnectionError("Not able to connect to the Redis Server");
    }
    
}