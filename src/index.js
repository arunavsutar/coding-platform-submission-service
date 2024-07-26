const connectToDB = require('./config/db.config');
const { PORT } = require('./config/server.config');
const errorHandler = require('./utils/errorhandler');

const fastify = require('fastify')({ logger: true });

fastify.register(require('./app'));
fastify.setErrorHandler(errorHandler);
fastify.listen({ port: PORT }, async(err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    await connectToDB();
    console.log(`The server is listning on ${PORT}`);
});