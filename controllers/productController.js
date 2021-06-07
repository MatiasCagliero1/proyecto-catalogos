const db = require('../database/models')
const op = db.Sequelize.Op;

module.exports = {

    index: (req, res) => {
        //  return res.redirect('/')

        db.Producto.findAll({

                order: [

                    ['product_name', `ASC`]

                ]
            })
            .then(producto => {
                return res.send(producto)

            })
    },

    search: (req, res) => {
        let QuerySearch = req.query.search;
        let paramSearch = req.params.busqueda;

        if (QuerySearch == undefined || QuerySearch == '') {
            var busqueda  = paramSearch
        }else{ 
            var busqueda  = QuerySearch
        }

        let condicionNumber = req.params.condicion;
        let orden = req.params.orden;

        /* llamar a los comentarios
               db.Usuario.findAll()
               .then(usuario => {
                   return res.send(usuario)

               }) */

        db.Producto.findAll(

                {
                    where: [{
                            product_name: {
                                [op.like]: `%${busqueda}%`
                            },
                           //IF condicion == 0  sacar condition
                                condicion: {
                                    [op.like]: `${condicionNumber}`
                                }
                    

                        }

                    ],
                    /* order: [

                         [ 'product_name', `${orden}`]

                     ]  */
                }
            )

            .then(producto => {



                return res.render('search-results', {
                    producto,
                    busqueda,
                    condicionNumber,
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
        let idProduct = req.params.id;

        db.Producto.destroy({
                where: {
                    id: idProduct
                }
            })

            .then(producto => {
                //return res.send(producto);
                return res.redirect('/')
            })
    },


    newProduct: (req, res) => {
        return res.render('product-add');
    },

    newProductPost: (req, res) => {
        //Saco del session el id de usuario
        let user_added = 1;

        db.Producto.create({
                product_name: req.body.nombre,
                detalle: req.body.detalle,
                img_name: req.body.image,
                condicion: req.body.condicion,
                user_added: user_added,
            })
            .then(() => {
                // Como saco el id?
                return res.redirect('/productos/detalle/2');
            })
            .catch(error => console.log(error));
    },

    editProduct: (req, res) => {
        let id = req.params.id;
        let user_added = 1;

        db.Producto.findByPk(id)
            .then(producto => {
                return res.render('product-edit', {
                    producto,
                    id
                })
            })
    },

    editProductPost: (req, res) => {
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