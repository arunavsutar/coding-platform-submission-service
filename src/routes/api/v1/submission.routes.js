const { pingRequest, createSubmission } = require("../../../controllers/submissionController");

async function submissionRoute(fastify, option) {
    fastify.post('/', createSubmission);
    fastify.get('/ping', pingRequest);
}

module.exports = submissionRoute;