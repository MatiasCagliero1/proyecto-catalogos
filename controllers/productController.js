const db = require('../database/models')
const op = db.Sequelize.Op;

module.exports = {

        index: (req, res) => {

            db.Producto.findAll()
                .then(producto => {

                    return res.send(producto)
                    return res.render('pagIndex', {
                        producto
                    })
                })
        },

        search: (req, res) => {
            let busqueda = req.params.busqueda;
            let condicion = req.params.condicion;
            let orden = req.params.orden;


            if (condicion == null) {

            }

            db.Producto.findAll()
                /* Si no hay condicion anulo el where */
                /*    ({
                       where: [{
                               product_name: { [op.like]: "%busqueda%"},
                               condicion: { [op.like]: "condicion"}
                           }

                       ],
                       order: [
                           ['product_name', 'orden'],

                       ]
                   }) */

                .then(producto => {
                    //     return res.send(producto)
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
                    //return res.send(producto);
                    return res.render('product', {
                        producto
                    })
                })
        },

        destroy: (req, res) => {
            let id = req.params.id;

            db.Producto.destroy({
                    where: {
                        id: id
                    }
                })
            
                .then(producto => {
                    //return res.send(producto);
                    return res.render('profile', {
                    
                    })
                })
        },


        newProduct: (req, res) => {

            db.Producto.create({
                    product_name: req.body.nombre,
                    detalle: req.body.detalle,
                    img_name: req.body.image,
                    condicion: req.body.condicion,
                    user_added: user_added,
                })
                .then(() => {
                    return res.redirect('/profile');
                })
                .catch(error => console.log(error));
        },

        newProductPost: (req, res) => {
            //Saco del session el id de usuario
            let user_added = 1;

            db.Producto.create({
                    product_name: req.body.nombre,
                    detalle: req.body.detalle,
                    img_name: req.body.image,
                    condicion: req.body.condicion,
                })
                .then(() => {
                    return res.redirect('/profile');
                })
                .catch(error => console.log(error));
        },

        editProduct: (req, res) => {
            let id = req.params.id;

            db.Producto.update({
                        product_name: req.body.nombre,
                        detalle: req.body.detalle,
                        img_name: req.body.image,
                        condicion: req.body.condicion,
                    }, {
                        where: {
                            id: id
                        }
                    })

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