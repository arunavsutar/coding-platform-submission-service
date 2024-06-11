const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/plugins.service');
const apiRoutes = require('./routes/api/api.routes');
const repositoryPlugin = require('./repositories/repositoryPlugin');
async function app(fastify, option) {
    await fastify.register(require('@fastify/cors'));
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);
    await fastify.register(apiRoutes, { prefix: '/api' });

}

module.exports = fastifyPlugin(app);