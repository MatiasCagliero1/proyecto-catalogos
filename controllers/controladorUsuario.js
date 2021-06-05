const db = require("../database/models")
const bcryptjs = require("bcryptjs")
var controladorUsuario = {
    registracion: (req, res) => {
        if (req.session.usuarioIngresado != null) {
            return res.redirect("/")
        } else {
            return res.render("register")
        }


    },
    store: (req, res) => {
        //let flag = true
        // let form = req.body
        // return res.send(form)
        let errores = []
        if (req.body.nombre === "") {
            errores.push("El nombre no puede estar vacío")

        }

        if (req.body.apellido === "") {
            errores.push("Su apellido no puede estar vacío")

        }
        if (req.body.email === "") {
            errores.push("Su email no puede estar vacío")

        } //else {

        // db.Usuario.findOne({ where: [{ email: req.body.email }] })
        //.then(emailRegistrado => {
        //  if (emailRegistrado != null) {
        //flag = false
        //console.log("----------" + emailRegistrado.email)
        //return res.redirect("/users/login")
        //errores.push("holii")


        //  }
        // })

        // }
        //if (//flag == false) {
        // errores.push("nfhjfj")

        //}
        let email = "false"
        db.Usuario.findOne({ where: [{ email: req.body.email }] })
            .then(usuario => {
                if (usuario != null) {
                    email = "true"
                }




            })
        if (email == "true") {
            errores.push("gjklgkkgl")
        }

        if (req.body.usuario === "") {
            errores.push("Su usuario no puede estar vacío")

        }
        if (req.body.contraseña === "") {
            errores.push("Su contraseña no puede estar vacío")

        }
        if (req.body.nacimiento === "") {
            errores.push("Su fecha de nacimiento no puede estar vacío")

        }
        if (errores.length === 0) {
            db.Usuario.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                    usuario: req.body.usuario,
                    contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
                    nacimiento: req.body.nacimiento
                })
                .then(usuario => {
                    //guardo en session el usuario
                    req.session.usuarioIngresado = usuario
                    return res.redirect("/")
                })
                .catch(error => console.log(error))


        } else {
            return res.render("erroresRegistro", { errores })
        }
    },
    logIn: (req, res) => {
        if (req.session.usuarioIngresado != null) {
            return res.redirect("/")
        } else {
            return res.render("logIn")
        }


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

                        //cookies
                        if (req.body.recordarme) {
                            res.cookie("userId", usuario.id, { maxAge: 1000 * 60 * 60 * 24 })
                        }
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
    },
    logout: (req, res) => {
        req.session.destroy()
        res.cookie("userId", "", { maxAge: -1 })
        return res.redirect("/")
    },
    adminProductos: (req, res) => {
        let usuario = req.session.usuarioIngresado

        if (req.session.usuarioIngresado.role === 3) {
            db.Producto.findAll()
                .then(productos => {
                    return res.render("adminProductos", { productos })
                        //return res.send(productos)
                })
                .catch(error => error)


        } else {
            return res.redirect("/")
        }






    },
    adminUsuarios: (req, res) => {
        if (req.session.usuarioIngresado.role === 3) {
            db.Usuario.findAll()
                .then(usuarios => {
                    return res.render("adminUsuarios", { usuarios })
                        //return res.send(usuarios)
                })

        } else {
            return res.redirect("/")
        }


    }





}
module.exports = controladorUsuario