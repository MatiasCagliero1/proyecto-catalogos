var express = require('express');
var router = express.Router();


// Requiriendo controlador 
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)



// Requiriendo Search - Detalle - Product Add
var productscontroller = require('../controllers/productscontroller');
// Ruta pagina Search - Detalle - Product Add
router.get('/search', productscontroller.search);
router.get('/search:id', productscontroller.searchId);
router.get('/detalle', productscontroller.detalle);
router.get('/detalle:id', productscontroller.detalleId);
router.get('/newproduct:id', productscontroller.newProduct);

module.exports = router;