var express = require('express');
var router = express.Router();
var searchcontroller = require('../controllers/searchcontroller');


router.get('/search/:word', searchcontroller.index);

// Requiriendo controlador 
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/home', mainController.index)


module.exports = router;
