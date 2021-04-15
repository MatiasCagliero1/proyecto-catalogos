const productos = require ('../data/comidas.json')

module.exports= {
    index: (req, res) => {
        return res.render("pagIndex")
    }
}

