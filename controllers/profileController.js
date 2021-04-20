const productos = require("../data/comidas.js")



module.exports = {
    index: (req, res) => {
        return res.render("profile", {productos})
    },

    edit: (req, res) => {
        return res.render("profile-edit")
    }
    
}