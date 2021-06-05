var express = require('express');
var router = express.Router();

// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');

// Ruta pagina Search - Detalle - Product Add
router.get('/', productController.index);

router.get('/search/:busqueda/:condicion/:orden', productController.search);

router.get('/detalle/:id', productController.detalle);

router.post('/destroy/:id', productController.destroy);

router.get('/newproduct', productController.newProduct);
router.post('/newproduct/post', productController.newProductPost);

router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/post/:id', productController.editProductPost);
 
module.exports = router;

