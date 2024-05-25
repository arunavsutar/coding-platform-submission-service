const v1Route = require("./v1/v1.routes");

async function apiRoutes(fastify, options) {
    fastify.register(v1Route, { prefix: '/v1' })
}

module.exports = apiRoutes;