var express = require('express');
var router = express.Router();

/* GET users listing. */

var controladorUsuario = require("../controllers/controladorUsuario")
router.get("/registracion", controladorUsuario.registracion)
router.post("/store", controladorUsuario.store)
router.get("/login", controladorUsuario.logIn)
router.post("/login", controladorUsuario.iniciar)

//Ruta pagina Profile - Profile-edit

router.get('/profile', controladorUsuario.perfil)
router.get('/profile/edit', controladorUsuario.edit)

module.exports = router;