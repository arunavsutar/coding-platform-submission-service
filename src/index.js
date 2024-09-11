const connectToDB = require('./config/db.config');
const { PORT } = require('./config/server.config');
const errorHandler = require('./utils/errorhandler');
const evaluationWorker = require('./workers/evaluationWorker');

const fastify = require('fastify')({ logger: true });

fastify.register(require('./app'));
fastify.setErrorHandler(errorHandler);
fastify.listen({ port: PORT }, async (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    await connectToDB();
    evaluationWorker(fastify,'evaluationQueue');
    console.log(`The server is listning on ${PORT}`);
});