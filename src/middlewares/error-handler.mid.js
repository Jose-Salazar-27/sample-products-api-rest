const ErrorHandlerMiddleware = (error, request, response, next) => {
  console.log('========== Middleware Error Handling ==========');

  const errorCode = error.statusCode || 500;
  const errorMessage = error.message || 'Something went wrong';

  const json = {
    success: false,
    status: errorCode,
    message: errorMessage,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {},
  };

  response.status(errorCode).json(json);
};

module.exports = { ErrorHandlerMiddleware };
