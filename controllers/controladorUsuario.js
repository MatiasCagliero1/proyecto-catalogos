var controladorUsuario = {
    index: (req, res) => {
        return res.render("register")
    },
    logIn: (req, res) => {
        return res.render("login")

    }


}
module.exports = controladorUsuario