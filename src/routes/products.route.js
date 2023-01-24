const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, createItem } = require('../controllers/products.controller');
const { uploadMiddleWare } = require('../middlewares/upload-file.mid');

// get list of products
router.get('/', getAllItems);

// get single product by id
router.get('/:id', getItemById);

// upload product
router.post('/', uploadMiddleWare.single('image-file'), createItem);

module.exports = router;
