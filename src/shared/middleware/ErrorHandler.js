const ServerError = require('../errors/ServerError')
const ErrorHandler = (error, request, response, next) => {
  if (error && error.statusCode) {
    response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message
    })
  } else {
    response.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
  next()
}

module.exports = ErrorHandler
