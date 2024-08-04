const { Worker } = require('bullmq');
const redisConnection = require('../config/redis.config')
function evaluationWorker(QueueName) {
    new Worker(QueueName, async job => {
        if (job.name === 'evaluationJob') {
            console.log(job.data);
        }
    }, { connection: redisConnection });
}

module.exports = evaluationWorker;