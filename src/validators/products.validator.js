const { body, check, param } = require('express-validator');
const validateResults = require('../utilities/validate-results.utilitie');
const ErrorMessages = require('../utilities/error-messages.utilitie');

const getSingleProductValidator = [
  param('id').exists().notEmpty().isMongoId().withMessage(ErrorMessages['mongo-id']),
  (request, response, next) => {
    validateResults(request, response, next);
  },
];

const updateProductValidator = [
  check('id').exists().notEmpty(),
  body('title').isLength({ min: 5 }).optional(),
  body('description').isLength({ min: 20 }).optional(),
  body('price').isNumeric().optional(),
  body('brand').isString().optional(),
  body('category').isString().optional(),
  (request, response, next) => {
    validateResults(request, response, next);
  },
];

module.exports = { getSingleProductValidator, updateProductValidator };
