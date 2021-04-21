var express = require('express');
var router = express.Router();


// Requiriendo controlador index
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)

// Requiriendo
const profileController = require('../controllers/profileController');



module.exports = router;