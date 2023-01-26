const { validationResult } = require('express-validator');

function validateResults(request, response, next) {
  try {
    validationResult(request).throw();
    next();
  } catch (errors) {
    response.status(400).json({ errors: errors.array() });
  }
}

module.exports = validateResults;
