const db = require('../database/models')

module.exports = {

    index: (req, res) => {
        let producto = db.Producto.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{
                    association: "userAdd"
                }

            ]
        })

        let productoVegano = db.Producto.findAll({
            where: [{ condicion: '2' }],
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{
                    association: "userAdd"
                }

            ]
        })

        Promise.all([productoVegano, producto])

        .then(([productoVegano, producto]) => {
            //return res.send (req.session.usuarioIngresado)
            //res.send(productoVegetariano)

            return res.render('pagIndex', {
                producto,
                productoVegano
            })
        })



    },
    /*
        index: (req, res) => {
            db.Comentario.findAll({/*
                include: {
                    all: true,
                    nested: true
                }
                Item.findAll({
                where : {
                    state: 1,
                    userId : req.session.usuario.id
                },
                include: {
                    all: true,
                    nested: true
                }
            })

            })
            .then(respuesta=>{
                return res.send(respuesta)
            })
            
        }*/
}