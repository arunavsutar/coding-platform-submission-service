const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).send({
            success: false,
            message: err.message,
            error: err.details,
            data: {}//This is an exception so no data is going to be provided.
        });
    }
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: "Something went wrong.",
        error: err,
        data: {}//This is an exception so no data is going to be provided.
    });
}

module.exports = errorHandler;