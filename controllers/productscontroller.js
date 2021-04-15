var datoscomidas = require('../data/comidas.json');
comidas = datoscomidas.comidas

module.exports = {

    index: (req, res) => {
        var parametro = 0
        return res.render("search-results", parametro);
    },

    product: (req, res) => {
        var parametro = 1
        let busqueda_array = req.params.id;
        let array_product_found = [];


        comidas.forEach(element => {
            if (element.imagenSrc == busqueda_array) {
                array_product_found.push(element)
                return res.render("search-results", parametro, array_product_found);
            }
        });


    }



};