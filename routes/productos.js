var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, 'public/img/productosFile')

  },

  filename: (req, file, cb) => {
//Ver UniqueID
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

  }
})

var upload = multer({storage: storage});

// Requiriendo Search - Detalle - Product Add
var productController = require('../controllers/productController');

// Ruta pagina Search - Detalle - Product Add
router.get('/', productController.index);

router.get('/search/:busqueda/:condicion/:orden', productController.search);

router.get('/detalle/:id', productController.detalle);

router.get('/destroy/:id', productController.destroy);

router.get('/newproduct', productController.newProduct);
router.post('/newproduct/post', upload.single('ProductoImg'), productController.newProductPost);

router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/post', upload.single('ProductoImg'), productController.editProductPost);



module.exports = router;


//No me carga el value en el edit product para mandarlo al post
//IF condicion == 0  sacar where condition en search
//Como saco el id del producto que mando en newProductPost
//Multer
//Llamar a varias bases de datos, como hago el fetch?





//If el producto es del usuraio aparece editar y eliminar 

//Se borro bien o mail el producto? . Hacer verificacion