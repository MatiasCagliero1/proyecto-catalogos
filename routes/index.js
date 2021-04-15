var express = require('express');
var router = express.Router();


// Requiriendo controlador 
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)



// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');
// Ruta pagina Search - Detalle - Product Add
router.get('/search', productController.search);
router.get('/search:id', productController.searchId);
router.get('/detalle', productController.detalle);
router.get('/detalle:id', productController.detalleId);
router.get('/newproduct:id', productController.newProduct);

module.exports = router;