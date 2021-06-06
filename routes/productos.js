var express = require('express');
var router = express.Router();

// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');

// Ruta pagina Search - Detalle - Product Add
router.get('/', productController.index);

router.get('/search/:busqueda/:condicion/:orden', productController.search);

router.get('/detalle/:id', productController.detalle);

router.get('/destroy/:id', productController.destroy);

router.get('/newproduct', productController.newProduct);
router.post('/newproduct/post', productController.newProductPost);

router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/post', productController.editProductPost);
 
module.exports = router;

   
//No me carga el value en el edit product para mandarlo al post
  //IF condicion == 0  sacar condition en search
  //Como saco el id del producto que mando en newProductPost