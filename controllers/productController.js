const dbProductos = require('../database/models/Producto');
const dbComenarios = require('../database/models/comentarios');

module.exports = {

    index: (req, res) => {
        dbProductos.findAll()

        .then(producto => {
            return res.render('pagIndex', {Producto})
        })
    },

    search: (req, res) => {
        let busqueda = req.params.busqueda;
        let condicion = req.params.condicion;
        let orden = req.params.orden;

        dbProductos.Producto.findAll()

        .then(producto => {
            return res.render('search-results', {producto, busqueda, condicion, orden})
        })

    },

    detalle: (req, res) => {
        let id = req.params.id;

        dbProductos.findByPk(id)
        .then(producto => {
            return res.render('product', {producto})
        })
        /* .then(comentarios =>{
            dbComenarios.findByPk(id)
        }) */
            
    },

    newProduct: (req, res) => {
        let id = req.params.id;

        dbComenarios.Producto.findByPk(id)

        .then(producto => {
            return res.render('product-add', {producto})
        })
    },

    changeProduct: (req, res) => {
        let id = req.params.id;

        db.Movie.create({
            title: "Batman inicia",
            length: 190,
            genre_id: 2
        });
        

        dbComenarios.Producto.findByPk(id)

        .then(producto => {
            
let form = req.body
            return res.redirect('product', {producto})
        })
    },

};