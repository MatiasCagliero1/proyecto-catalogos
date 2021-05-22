const db = require('../database/models')

module.exports = {

    index: (req, res) => {

        db.Producto.findAll()
            .then(producto => {
                return res.render('pagIndex', {
                    producto
                })
            })
    },

    search: (req, res) => {
        let busqueda = req.params.busqueda;
        let condicion = req.params.condicion;
        let orden = req.params.orden;

        db.Productos.findAll()

            .then(producto => {
                return res.render('search-results', {
                    producto,
                    busqueda,
                    condicion,
                    orden
                })
            })

    },

    detalle: (req, res) => {
        let id = req.params.id;

    
        db.Producto.findByPk(id)
       
            .then(producto => {
                return res.send(producto)
                return res.render('product', {
                    producto
                })
            })


    },

    newProduct: (req, res) => {
        let id = req.params.id;

        db.Comenarios.findByPk(id)

            .then(producto => {
                return res.render('product-add', {
                    producto
                })
            })
    },

    newProductPost: (req, res) => {
        db.Producto.create({
                nombre: req.body.nombre,
                detalle: req.body.detalle,
                medida: req.body.medida,
                precioMedida: req.body.precioMedida,
                vegetariano: req.body.vegetariano,
                vegano: req.body.vegano,
                sinTacc: req.body.sinTacc
            })
            .then(() => {
                return res.redirect('/productos');
            })
            .catch(error => console.log(error));
    },

    editProduct: (req, res) => {
        let id = req.params.id;

        db.Movie.create({
            nombre: req.body,
            nombre,
            length: 190,
            genre_id: 2
        });


        db.Comenarios.findByPk(id)

            .then(producto => {

                let form = req.body
                return res.redirect('product', {
                    producto
                })
            })
    },

    editProductPost: (req, res) => {
        let id = req.params.id;

        db.Producto.update({
                nombre: req.body.nombre,
                detalle: req.body.detalle,
                medida: req.body.medida,
                precioMedida: req.body.precioMedida,
                vegetariano: req.body.vegetariano,
                vegano: req.body.vegano,
                sinTacc: req.body.sinTacc
            }, {
                where: {
                    id: id
                }
            })
            .then(() => {
                return res.redirect('/productos');
            })
            .catch(error => console.log(error));

        db.Producto.destroy({
            where: {
                id: id
            }
        })
    },



};