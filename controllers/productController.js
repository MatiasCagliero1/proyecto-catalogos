const db = require('../database/models')
const op = db.Sequelize.Op;

module.exports = {

    // El metodo index lleva a la ruta / llevando los productos ordenados
    index: (req, res) => {
        return res.redirect('/')
    },

    // El metodo search se encarga de llamar a los productos rn funcion de la palabra clave
    search: (req, res) => {
        let QuerySearch = req.query.search;
        let paramSearch = req.params.busqueda;

        // Tomas si la palabra clave viene de req.query o req.params
        if (QuerySearch == undefined || QuerySearch == '') {
            var busqueda = paramSearch
        } else {
            var busqueda = QuerySearch
        }

        let condicionNumber = req.params.condicion;
        let orden = req.params.orden;

        //Llamo a las bases de datos -- La de 'producto' que me traiga en funcion de la palabra clave
        let usuario = db.Usuario.findAll()

        let producto = db.Producto.findAll(

            //Busqueda por nombre y DESCRIPCION >>>>>>>>>>
            {
                where: [{
                        [op.or]: [{
                                product_name: {
                                    [op.like]: `%${busqueda}%`
                                }
                            },
                            {
                                detalle: {
                                    [op.like]: `%${busqueda}%`
                                }
                            }
                        ]
                    }

                ],

                include: [{
                    association: "userAdd"
                }]
            }
        )

        Promise.all([producto])

        .then(([producto]) => {
            //return res.send (productoDetalle)

            return res.render('search-results', {
                producto,
                busqueda,
                condicionNumber,
                orden
            })
        })
    },

    // El metodo detalle lleva a la pagina de producto
    detalle: (req, res) => {
        let id = req.params.id;

        let producto = db.Producto.findAll({
            where: {
                id: id
            },

            include: [{
                    association: "userAdd"
                }, {
                    association: "productoId"
                }

            ]
        })
        let comentario = db.Comentario.findAll({
            where: [{ productos_id: id }],
            include: [{
                    association: "usuarioId"
                }, {
                    association: "comentarioId"
                }

            ]
        })


        // Si se acaba de agregar un producto o editar, manda un valor (mensajeBack) a la vista para renderizar un mensaje
        let mensaje = req.query.mensaje;

        Promise.all([producto, comentario])

        .then(([producto, comentario]) => {
            //return res.send(producto)
            // return res.send(comentario)
            return res.render('product', {
                producto,
                mensaje,
                id,
                comentario
            })
        })


    },

    // El metodo destroy elimina el producto en la base de datos
    destroy: (req, res) => {
        if (req.session.usuarioIngresado == null) {
            res.redirect("/")
        } else {

            let idProduct = req.params.id;

            db.Producto.destroy({
                where: {
                    id: idProduct
                }
            })

            .then(producto => {
                return res.redirect('/')
            })
        }
    },

    // El metodo newProduct renderiza una vista para crear un nuevo producto
    newProduct: (req, res) => {

        if (req.session.usuarioIngresado == null) {
            return res.redirect("/")
        } else {
            return res.render("product-add")
        }
    },

    // El metodo newProductPost carga la info subida al formulario en la base de datos
    newProductPost: (req, res) => {
        let user_added = req.session.usuarioIngresado.id;
        //req.session.usuarioIngresado.id

        db.Producto.create({
                product_name: req.body.nombre,
                detalle: req.body.detalle,
                img_name: req.file ? req.file.filename : 'default-image.png',
                condicion: req.body.condicion,
                userAdded: user_added,
            })
            .then(producto => {
                return res.redirect(`/productos/detalle/${producto.id}?mensaje=creadoBien`);
            })
            .catch(error => console.log(error));
    },

    // Editar un producto en funcion del id
    editProduct: (req, res) => {
        let id = req.params.id;

        if (req.session.usuarioIngresado == null) {
            res.redirect("/")
        } else {
            db.Producto.findByPk(id)

            .then(producto => {
                if (req.session.usuarioIngresado.id == producto.userAdd) {
                    //llamar al product usser added
                    return res.render('product-edit', {
                        producto,
                        id
                    })
                } else {
                    return res.redirect("/")
                }


            })
        }
    },

    // El metodo editProductPost modifica la info subida al formulario en la base de datos
    editProductPost: (req, res) => {

        let user_added = req.session.usuarioIngresado.id;
        idProducto = req.body.idProducto,

            db.Producto.update({
                id: req.body.idProducto,
                product_name: req.body.nombre,
                detalle: req.body.detalle,
                img_name: req.body.image,
                condicion: req.body.condicion,
                userAdded: user_added,
            }, {
                where: {
                    id: idProducto
                }
            })
            .then(product => {
                return res.redirect(`/productos/detalle/${idProducto}?mensaje=actualizadoBien`);
            })
            .catch(error => console.log(error));

    },

    createComent: (req, res) => {

        db.Comentario.create({
            texto: req.body.comentario,
            usuarios_id: req.body.id,
            productos_id: req.body.idProducto,
        })

        .then((comentario) => {
                //    return res.send(comentario)
                return res.redirect(`/productos/detalle/${comentario.productos_id}?mensaje=comentadoBien`);
            })
            .catch((error) => error)

    },

    /*    show : (req, res)=> {
           let id = req.params.id;
          
           db.Rescatado.findByPk(id, {
                include:[
                   {association: 'comentarios', include: {association: 'usuario'}},
                   {association: 'producto'}]   
               })
           .then(rescatado=> {
               let comentarios = rescatado.comentarios
               return res.render('product', {rescatado, comentarios})
               
           })
           .catch(error => console.log(error))
       }, */

};