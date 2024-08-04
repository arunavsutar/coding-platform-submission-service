const SubmissionProducer = require('../producers/submissionQueueProducer');
const fetchProblemDetails = require('../apis/problemAdmin.api');

class SubmissionService {
    constructor(submissionRepository) {
        //Inject your repository Here.....
        this.submissionRepository = submissionRepository;
    }
    async pingcheck() {
        return 'PONG';
    }
    async createSubmission(submission) {
        //get the code stub from prblem service using synchronous API Call.
        const problemId = submission.problemId;
        const userId = submission.userId;
        console.log("the Problem_ID is ==>", problemId);
        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        //Change the payload by adding the codestub
        const languageCodeStub = problemAdminApiResponse.data.data.codeStubs.find(codeStub =>
            codeStub.language.toLowerCase() === submission.language.toLowerCase());
        console.log(languageCodeStub);
        submission.code = languageCodeStub.startSnippet + '\n\n' + submission.code + '\n\n' + languageCodeStub.endSnippet
        //Create the entry in the DB
        const submission2 = await this.submissionRepository.createSubmission(submission);

        //If entry created then only add it the redis queue
        if (!submission2) {
            throw { msg: "Not able to create Submission." };
        }
        const response = await SubmissionProducer({
            "submission": {
                code: submission.code,
                language: submission.language,
                inputCase: problemAdminApiResponse.data.data.testCases[0].input,
                outputCase: problemAdminApiResponse.data.data.testCases[0].output,
                userId: userId,
                submissionId: submission._id
            }
        });
        return response;
        //return "Successfully featched the data from problem Service.";
    }
}


module.exports = SubmissionService;
