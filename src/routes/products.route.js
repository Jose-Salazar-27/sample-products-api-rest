const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, createItem, updateItem } = require('../controllers/products.controller');
const { uploadMiddleWare } = require('../middlewares/upload-file.mid');
const { getSingleProductValidator, updateProductValidator } = require('../validators/products.validator');

// get list of products
router.get('/', getAllItems);

// get single product by id
router.get('/:id', getSingleProductValidator, getItemById);

// upload product
router.post('/', uploadMiddleWare, createItem);

// Update products
router.put('/:id', updateProductValidator, updateItem);

module.exports = router;
