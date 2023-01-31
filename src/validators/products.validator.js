const { body, check, param } = require('express-validator');
const validateResults = require('../utilities/validate-results.utilitie');
const ErrorMessages = require('../utilities/error-messages.utilitie');

const getItemValidator = [
  param('id').exists().notEmpty().isMongoId().withMessage(ErrorMessages['mongo-id']),
  (request, response, next) => {
    validateResults(request, response, next);
  },
];

const createItemValidator = [
  body('title').exists().notEmpty().isLength({ min: 5 }).withMessage(ErrorMessages['title']),
  body('description').exists().notEmpty().isLength({ min: 20 }).withMessage(ErrorMessages['description']),
  body('price').exists().notEmpty().isNumeric().withMessage(ErrorMessages['price']),
  (request, response, next) => {
    validateResults(request, response, next);
  },
];

const updateItemValidator = [
  check('id').exists().notEmpty().isMongoId().withMessage(ErrorMessages['mongo-id']),
  body('title').isLength({ min: 5 }).withMessage(ErrorMessages['title']).optional(),
  body('description').isLength({ min: 20 }).withMessage(ErrorMessages['description']).optional(),
  body('price').isNumeric().withMessage(ErrorMessages['price']).optional(),
  body('brand').isString().withMessage(ErrorMessages['brand']).optional(),
  body('category').isString().isLength().withMessage(ErrorMessages['category']).optional(),
  (request, response, next) => {
    validateResults(request, response, next);
  },
];

module.exports = { createItemValidator, getItemValidator, updateItemValidator };
