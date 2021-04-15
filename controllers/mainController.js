const productos = require ('../data/comidas')

const controller = {
    index: (req, res) => {
        return res.render("pagIndex")
    }
}

module.exports = controller