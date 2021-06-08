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
            var busqueda = paramSearch
        } else {
            var busqueda = QuerySearch
        }

        let condicionNumber = req.params.condicion;
        let orden = req.params.orden;

        let usuario = db.Usuario.findAll()
        let producto = db.Producto.findAll(

            {
                where: [{
                        product_name: {
                            [op.like]: `%${busqueda}%`
                        }
                    }

                ],
                 /*  order: [

                      [ 'product_name', `${orden}`]

                  ]   */
            }
        )

        Promise.all([producto])

            .then(([producto]) => {

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
        let producto = db.Producto.findByPk(id)

        let mensaje = req.query.mensaje;

        if (mensaje == 'actualizadoBien') {
            mensajeBack = 'actualizado';
        }if (mensaje == 'creadoBien') {
            mensajeBack = 'creado';
        }else{
            mensajeBack = 0;
        }
        
        Promise.all([producto])

        .then(([producto]) => {
            //return res.send (req.session.usuarioIngresado)

                return res.render('product', {producto, mensajeBack})
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
            
                return res.redirect('/')
            })
    },


    newProduct: (req, res) => {
        return res.render('product-add');
    },

    newProductPost: (req, res) => {
        //Saco del session el id de usuario
        let user_added = 1;
        //req.session.usuarioIngresado.id

        db.Producto.create({
                product_name: req.body.nombre,
                detalle: req.body.detalle,
                img_name: req.file ? req.file.filename : '',
                condicion: req.body.condicion,
                userAdded:user_added ,
            })
            .then(producto => {
            
                return res.redirect(`/productos/detalle/${producto.id}?mensaje=creadoBien`);
            })
            .catch(error => console.log(error));
    },

    editProduct: (req, res) => {
        let id = req.params.id;
       
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

        let user_added = 1;

        db.Producto.update({
                product_name: req.body.nombre,
                detalle: req.body.detalle,
                img_name: req.body.image,
                condicion: req.body.condicion,
                user_added: user_added,
            }, {
                where: {
                    id: id
                }
            })
            .then(product => {
                return res.redirect(`/productos/detalle/${product.id}?mensaje=actualizadoBien`);
            })
            .catch(error => console.log(error));

        db.Producto.destroy({
            where: {
                id: id
            }
        })
    },



};