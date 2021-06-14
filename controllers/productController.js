const db = require('../database/models')
const op = db.Sequelize.Op;

module.exports = {

    // El metodo index lleva a la ruta / llevando los productos ordenados
    index: (req, res) => {
/*         if (req.session.usuarioIngresado === null || req.session.usuarioIngresado === undefined) {
            return res.send('req.session.usuarioIngresado')
        } else {
            return res.send(req.session.usuarioIngresado)
        } */

        db.Producto.findAll({

                order: [

                    ['product_name', `ASC`]

                ]
            })
            .then(producto => {
                return res.send(producto)

            })
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

            {
                where: [{
                        product_name: {
                            [op.like]: `%${busqueda}%`
                        }
                    }

                ], // <<<<<<< NO ANDA EL ORDER >>>>>>>>>>
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

    // El metodo detalle lleva a la pagina de producto
    detalle: (req, res) => {
        let id = req.params.id;
        let producto = db.Producto.findByPk(id)
        let comentarios = db.Comentario.findAll()
        let usuarios = db.Usuario.findAll()

        // Si se acaba de agregar un producto o editar, manda un valor (mensajeBack) a la vista para renderizar un mensaje
        let mensaje = req.query.mensaje;

        if (mensaje == 'actualizadoBien') {
            mensajeBack = 'actualizado';
        }
        if (mensaje == 'creadoBien') {
            mensajeBack = 'creado';
        } else {
            mensajeBack = 0;
        }

        Promise.all([producto,comentarios,usuarios ])

            .then(([producto,comentarios, usuarios]) => {
                //return res.send (req.session.usuarioIngresado)
    //         return res.send(comentarios)

                return res.render('product', {
                    producto,
                    mensajeBack,
                    comentarios,
                    usuarios
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
                img_name: req.file ? req.file.filename : 'default-image',
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
                //llamar al product usser added
                return res.render('product-edit', {
                    producto,
                    id
                })
            })
        }
    },

    // El metodo editProductPost modifica la info subida al formulario en la base de datos
    editProductPost: (req, res) => {
        let id = req.params.id;

        let user_added = req.session.usuarioIngresado.id;

        // <<<<<<< LLAMAR AL ID USUARIO >>>>>>>>>>

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

    },


};