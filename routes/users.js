var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var controladorUsuario = require("../controllers/controladorUsuario")
router.get("/registracion", controladorUsuario.index)
router.get("/login", controladorUsuario.logIn )

module.exports = router;

