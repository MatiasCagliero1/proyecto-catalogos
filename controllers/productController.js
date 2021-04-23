let comidasModulo = require('../data/comidas.js')
productosArray = comidasModulo.productos;


let usuariosFalsos = require('../data/fakeUser.json');
usuariosFalsos = usuariosFalsos.usuarios;

module.exports = {
    index: (req, res) => {
        return res.render("pagIndex", {productosArray});
    },

    search: (req, res) => {
        let title = req.params.busqueda;
        return res.render("search-results",{ title ,productosArray});
    },

    detalle: (req, res) => {

        let id = req.params.id;
        
       /*  if (id == null || undefined || "") {
            return res.render("pagIndex", {productosArray}); 
        } */

/* Acá realizar consulta con SQL a la base de datos solicitando el id */
        return res.render("product", {usuariosFalsos, id, productosArray});
    },

    newProduct: (req, res) => {
        let id = req.params.id;
        return res.render("product-add", {id, productosArray});
    },

};