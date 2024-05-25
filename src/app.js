const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/testPlugins.service');
const apiRoutes = require('./routes/api/api.routes');
async function app(fastify, option) {
    fastify.register(servicePlugin);
    fastify.register(apiRoutes, { prefix: '/api' });

}

module.exports = fastifyPlugin(app);