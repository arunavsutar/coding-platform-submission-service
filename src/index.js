const { PORT } = require('./config/server.config');

const fastify = require('fastify')({ logger: true });
fastify.register(require('./app'));

fastify.listen({ port: PORT }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`The server is listning on ${PORT}`);
});