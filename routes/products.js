var express = require('express');
var router = express.Router();

// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');

// Ruta pagina Search - Detalle - Product Add
router.get('/', productController.index);
router.get('/search', productController.search);
router.get('/newproduct', productController.newProduct);

module.exports = router;