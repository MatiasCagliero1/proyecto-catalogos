var datoscomidas = require('../data/comidas.js');
comidas = datoscomidas.comidas

var usuariosFalsos = require('../data/fakeUser.json');
usuariosFalsos = usuariosFalsos.usuarios;

module.exports = {
    index: (req, res) => {
        return res.render("search-results", { comidas })
    },

    search: (req, res) => {
        return res.render("search-results");
    },

    searchId: (req, res) => {
        let busqueda_array = req.params.id;
        let array_product_found = [];


        comidas.forEach(element => {
            if (element.imagenSrc == busqueda_array) {
                array_product_found.push(element)
                return res.render("product", parametro, array_product_found);
            }
        });


    },

    detalle: (req, res) => {
        return res.render("product", {usuariosFalsos});
    },

    detalleId: (req, res) => {
        return res.render("product", {usuariosFalsos});
    },


    newProduct: (req, res) => {
        return res.render("product-add");
    },

};