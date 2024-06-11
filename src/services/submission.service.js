const SubmissionProducer =require('../producers/submissionQueueProducer');
class SubmissionService {
    constructor(submissionRepository) {
        //Inject your repository Here.....
        this.submissionRepository=submissionRepository;
    }
    async pingcheck() {
        return 'PONG';
    }
    async createSubmission(submission) {
        const submission2=this.submissionRepository.createSubmission(submission);
        if(!submission2){
            throw {msg:"Not able to create Submission."};
        }
        const response = await SubmissionProducer(submission);
        return response;
    }
}


module.exports = SubmissionService;
