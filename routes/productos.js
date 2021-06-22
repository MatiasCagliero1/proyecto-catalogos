var express = require('express');
var router = express.Router();

// Requiero Multer
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null,path.resolve(__dirname,'../public/images/productosFile'))

  },

  filename: (req, file, cb) => {
//Ver UniqueID
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

  }
})

var upload = multer({storage});

// Requiriendo Controlador
var productController = require('../controllers/productController');

// Relacionando Rutas con metodos
router.get('/', productController.index);

router.get('/search/:busqueda/:condicion/:orden', productController.search);

router.get('/detalle/:id', productController.detalle);
router.get('/destroy/:id', productController.destroy);

router.get('/newproduct', productController.newProduct);
router.post('/newproduct/post', upload.single('img_name'), productController.newProductPost);

router.get('/editproduct/:id', productController.editProduct);
router.post('/editproduct/post', upload.single('img_name'), productController.editProductPost);


module.exports = router;

//No anda el order sequialize en search


