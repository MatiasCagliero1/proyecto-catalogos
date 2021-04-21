const productos = require("../data/comidas.js")

var controladorUsuario = {
    index: (req, res) => {
        return res.render("register")
    },
    logIn: (req, res) => {
        return res.render("logIn")

    },
    perfil: (req, res) => {
        return res.render("profile", {productos})
    },
    edit: (req, res) => {
        return res.render("profile-edit")
    }
    
    



}
module.exports = controladorUsuario