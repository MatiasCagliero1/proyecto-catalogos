const db = require("../database/models")
const bcryptjs = require("bcryptjs")
var controladorUsuario = {
    registracion: (req, res) => {

        return res.render("register")
    },
    store: (req, res) => {
        // let form = req.body
        // return res.send(form)
        db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                usuario: req.body.usuario,
                contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
                nacimiento: req.body.nacimiento
            })
            .then(() => {
                return res.redirect("/")
            })
            .catch(error => console.log(error))
    },
    logIn: (req, res) => {
        return res.render("logIn")

    },
    iniciar: (req, res) => {
        let recordarme = req.body.recordarme

        db.Usuario.findOne({ where: [{ usuario: req.body.usuario }] })
            .then(usuario => {
                if (usuario == null) {
                    return res.redirect("/users/registracion")
                } else {
                    if (bcryptjs.compareSync(req.body.password, usuario.contraseña)) {
                        //guardo en session el usuario
                        req.session.usuarioIngresado = usuario
                        return res.redirect("/")
                    } else {
                        return res.redirect("/users/login")
                    }
                }
            })
            .catch(error => console.log(error))

    },
    perfil: (req, res) => {
        return res.render("profile", { productos })
    },
    edit: (req, res) => {
        return res.render("profile-edit")
    }





}
module.exports = controladorUsuario