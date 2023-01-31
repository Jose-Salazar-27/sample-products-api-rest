const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, createItem, updateItem } = require('../controllers/products.controller');
const { uploadMiddleWare } = require('../middlewares/upload-file.mid');
const { getItemValidator, createItemValidator, updateItemValidator } = require('../validators/products.validator');

// get list of products
router.get('/', getAllItems);

// get single product by id
router.get('/:id', getItemValidator, getItemById);

// upload product
router.post('/', uploadMiddleWare, createItemValidator, createItem);

// Update products
router.put('/:id', updateItemValidator, updateItem);

module.exports = router;
