var express = require('express');
var router = express.Router();


// Requiriendo controlador 
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)

// Requiriendo Search
var productscontroller = require('../controllers/productscontroller');

// Ruta pagina Search
router.get('/search', productscontroller.index);


module.exports = router;