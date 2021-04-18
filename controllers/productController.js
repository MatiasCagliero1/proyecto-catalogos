var datoscomidas = require('../data/comidas.js');
comidas = datoscomidas.comidas

var usuariosFalsos = require('../data/fakeUser.json');
usuariosFalsos = usuariosFalsos.usuarios;

module.exports = {
    index: (req, res) => {
        return res.render("pagIndex", {comidas});
    },

    search: (req, res) => {
        let title = req.params.busqueda;
        return res.render("search-results",{ title });
    },

    detalle: (req, res) => {
        let id = req.params.id;
/* Acá realizar consulta con SQL a la base de datos solicitando el id */
        return res.render("product", {usuariosFalsos, id});
    },

    newProduct: (req, res) => {
        let id = req.params.id;
        return res.render("product-add", {id});
    },

};