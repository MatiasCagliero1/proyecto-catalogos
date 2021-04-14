var controladorUsuario = {
    index: (req, res) => {
        return res.render("register")
    },
    logIn: (req, res) => {
        return res.render("logIn")

    }


}
module.exports = controladorUsuario