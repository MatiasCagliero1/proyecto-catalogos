var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var controladorUsuario = require("../controllers/controladorUsuario")
router.get("/registracion", controladorUsuario.index)
router.get("/login", controladorUsuario.logIn )

//Ruta pagina Profile - Profile-edit

router.get('/profile', controladorUsuario.perfil)
router.get('/profile/edit', controladorUsuario.edit)

module.exports = router;

