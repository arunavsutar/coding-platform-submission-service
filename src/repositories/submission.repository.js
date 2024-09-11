const Submission = require('../models/submissionModel');

class SubmissionRepository {
    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submission) {
        const response = await this.submissionModel.create(submission);
        return response;
    }
    async updateSubmission(id, data) {
        const response = await this.submissionModel.findOneAndUpdate({ _id: id }, { $set: { status: data.response.status } }, { new: true });
        if (!response) {
            throw Error;
        }
        return response
    }
}

module.exports = SubmissionRepository;