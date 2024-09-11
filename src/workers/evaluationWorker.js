const { Worker } = require('bullmq');
const redisConnection = require('../config/redis.config');
const axios = require('axios');
function evaluationWorker(fastify, QueueName) {
    new Worker(QueueName, async job => {
        if (job.name === 'evaluationJob') {
            try {
                const updateResponse = await fastify.submissionService.updateSubmission(job.data);
                const response = await axios.post('http://localhost:5000/sendPayLoad', {
                    userId: job.data.userId,
                    payload: job.data
                });
                console.log("\nResponse from Socket Service = \n", response);
            } catch (error) {
                console.log(error);
            }
        }
    }, { connection: redisConnection });
}

module.exports = evaluationWorker;