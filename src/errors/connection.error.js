const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");
class ConnectionError extends BaseError {
    constructor(details) {
        super("ConnectionError", StatusCodes.SERVICE_UNAVAILABLE, `Something Went Wrong while connecting.`, details);
    }
}


module.exports = ConnectionError;