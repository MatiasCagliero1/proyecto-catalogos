var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
//});

// Requiriendo controlador 
const mainController = require('../controllers/mainController')

// Ruta pagina index
router.get('/', mainController.index)


module.exports = router;