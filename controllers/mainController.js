let comidasModulo = require('../data/comidas.js')
productosArray = comidasModulo.productos;
productosArrayOfertas = comidasModulo.ofertas;

module.exports = {
    index: (req, res) => {
        return res.render("pagIndex", { productosArray })
    }
}