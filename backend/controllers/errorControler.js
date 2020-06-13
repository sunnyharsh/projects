const AppError = require('../utils/appError');

const handleCasteerror = (err) => {
  const message = `Invalid ${err.path} : $ ${err.value}`;
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate value ${value} please use another value`;
  return new AppError(message, 400);
};
const handleValidationErrorDb = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data ${errors.join('. ')}`;
  return new AppError(message, 400);
};
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err, res) => {
  //opertional trusted error: send to client
  if (err.isOpertional) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    //progmaming unknown error dont leak error details
  } else {
    // 1/ lof the console.error;
    console.error('Error 🔥 ', err);
    //2 sedn generic msg
    res.status(500).json({
      status: 'error',
      message: 'something went very wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'CastError') error = handleCasteerror(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDb(error);
    sendErrorProd(error, res);
  }
};
