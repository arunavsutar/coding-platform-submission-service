const { createSubmission } = require("../../../controllers/submissionController");

async function submissionRoute(fastify, option) {
    fastify.post('/',createSubmission)
}

module.exports = submissionRoute;