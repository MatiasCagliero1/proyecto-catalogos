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
        let errores = {}
            //let erroresVarios = []
        if (req.body.nombre === "") {

            errores.nombre = "Nombre"

        }

        if (req.body.apellido === "") {
            errores.apellido = "Apellido"

        }
        //else {

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
        // let email = "false"
        //db.Usuario.findOne({ where: [{ email: req.body.email }] })
        // .then(usuario => {
        // if (usuario != null) {
        //   email = "true"
        // }




        // })


        if (req.body.usuario === "") {
            errores.usuario = "Su usuario no puede estar vacío"

        }
        if (req.body.contraseña === "") {
            errores.contraseña = "Su contraseña no puede estar vacío"

        }
        if (req.body.contraseña.length <= 3) {
            errores.contraseñaExtensión = "Su contraseña debe contar con al menos 3 caracteres"

        }
        if (req.body.nacimiento === "") {
            errores.nacimiento = "Su fecha de nacimiento no puede estar vacío"

        }
        if (req.body.email === "") {
            errores.email = "Su email no puede estar vacío"

        }
        let registrado = ""
            //console.log(errores.email + "----------")
            //console.log(errores.email + "------------")
            // console.log(errores.email + "-------------")
        if (Object.keys(errores).length == 0) {
            db.Usuario.findOne({
                    where: [{
                        email: req.body.email,
                    }]
                })
                .then(usuarioEmail => {
                    if (usuarioEmail != null) {
                        registrado = "email ya registrado"
                        res.locals.registrado = registrado
                        return res.render("register")
                    } else {
                        db.Usuario.create({
                                imgUsuario: req.file.filename,
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
                    }
                })
        } else {
            //res.locals.erroresVarios = erroresVarios
            res.locals.errores = errores

            //return res.send(res.locals.errores)
            return res.render("register")

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


        let erroresLogin = {}
        db.Usuario.findOne({
                where: [{ email: req.body.email }]
            })
            .then(usuario => {
                if (usuario == null) {
                    erroresLogin.email = "Usted no tiene cuenta con ese email"
                    res.locals.erroresLogin = erroresLogin
                    return res.render("login")
                } else {
                    if (bcryptjs.compareSync(req.body.password, usuario.contraseña)) {
                        //guardo en session el usuario
                        req.session.usuarioIngresado = usuario


                        // Si el usuario tildo el 'recordarme', guardar el usuario.id en cookies por unas 24 horas
                        if (req.body.recordarme) {
                            res.cookie("userId", usuario.id, {
                                maxAge: 1000 * 60 * 60 * 24
                            })
                        }
                        return res.redirect("/")

                    } else {
                        erroresLogin.contraseña = "Contraseña Incorrecta"
                        res.locals.erroresLogin = erroresLogin
                        return res.render("login")
                    }
                }

            })
            .catch(error => console.log(error))
    },
    perfil: (req, res) => {
        db.Producto.findAll()
            .then(respuesta => {
                    return res.render('profile', { respuesta })
                },
                db.Usuario.findAll()
                .then(usuario => {
                    return res.render('profile', { usuario })
                }))
            .then(respuesta => {
                return res.render('profile', {
                    respuesta
                })
            })
    },
    edit: (req, res) => {
        let id = req.params.id;

        db.Usuario.findByPk(id)

        .then(res.render('profile-edit'))
    },

    editado: (req, res) => {
        let editado = req.params.id
            //let errores = []


        db.Usuario.update({
                    email: req.body.email,
                    usuario: req.body.usuario,
                    //contraseña
                }, { where: { id: editado } }

            )
            .then(() => {
                return res.redirect('/')
            })

    },
    logout: (req, res) => {
        req.session.destroy()
        res.cookie("userId", "", {
            maxAge: -1
        })
        return res.redirect("/")
    },
    adminProductos: (req, res) => {
        let usuario = req.session.usuarioIngresado

        if (req.session.usuarioIngresado != null && req.session.usuarioIngresado.role === 3) {
            db.Producto.findAll()
                .then(productos => {
                    return res.render("adminProductos", {
                        productos
                    })

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
                    return res.render("adminUsuarios", {
                        usuarios
                    })
                    return res.send(usuarios)
                })

        } else {
            return res.redirect("/")
        }


    },
    adminProductoDelete: (req, res) => {
        db.Producto.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                return res.redirect("/users/admin/productos")

            })
    },
    adminUsuariosDelete: (req, res) => {
        db.Usuario.destroy({
                where: { id: req.params.id }
            })
            .then(() => {
                return res.redirect("/users/admin/usuarios")
            })
    }






}
module.exports = controladorUsuario