const fastifyPlugin = require('fastify-plugin');
const TestService = require('./test.service');
async function servicePlugin(fastify, options) {
    fastify.decorate('testService', new TestService());
}
module.exports = fastifyPlugin(servicePlugin);