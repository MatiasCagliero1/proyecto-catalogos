var express = require('express');
var router = express.Router();
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/users")
    },
    filename: (req, file, cb) => {
        cb(null, "user-" + Date.now() + path.extname(file.originalname))

    }
})
const upload = multer({ storage: storage })

/* GET users listing. */

var controladorUsuario = require("../controllers/controladorUsuario")
router.get("/registracion", controladorUsuario.registracion)
router.post("/store", upload.single("fotoUsuario"), controladorUsuario.store)
router.get("/login", controladorUsuario.logIn)
router.post("/iniciar", controladorUsuario.iniciar)

router.get("/logout", controladorUsuario.logout)

router.get("/admin/productos", controladorUsuario.adminProductos)
router.get("/admin/usuarios", controladorUsuario.adminUsuarios)
router.get("/admin/deleteProducto/:id", controladorUsuario.adminProductoDelete)
router.get("/admin/deleteUsuario/:id", controladorUsuario.adminUsuariosDelete)

//Ruta pagina Profile - Profile-edit

router.get('/profile', controladorUsuario.perfil)
router.get('/profile/edit/:id', controladorUsuario.edit)
router.post('/profile/edit/:id', controladorUsuario.editado)






module.exports = router;