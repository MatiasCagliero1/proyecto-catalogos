const productos = require('../data/comidas.js')

module.exports = {
    index: (req, res) => {
        return res.render("pagIndex", { productos })
    }
}