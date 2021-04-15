var express = require('express');
var router = express.Router();


// Requiriendo controlador index
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)


// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');
const profileController = require('../controllers/profileController');
// Ruta pagina Search - Detalle - Product Add
router.get('/search', productController.search);
router.get('/search:id', productController.searchId);
router.get('/detalle', productController.detalle);
router.get('/detalle:id', productController.detalleId);
router.get('/newproduct:id', productController.newProduct);

//Ruta pagina Profile - Profile-edit
router.get('/profile', profileController.index)
router.get('/profile/edit', profileController.edit)

module.exports = router;