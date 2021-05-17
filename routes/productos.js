var express = require('express');
var router = express.Router();

// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');

// Ruta pagina Search - Detalle - Product Add
router.get('/', productController.index);

router.get('/search/:busqueda/:condicion/:orden', productController.search);

router.get('/detalle/:id', productController.detalle);

router.get('/newproduct/:id', productController.newProduct);
router.post('/newproduct/:id', productController.changeProduct);

module.exports = router;