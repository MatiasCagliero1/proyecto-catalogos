const db = require('../database/models')

module.exports = {
    /*
    index: (req, res) => {
        let producto = db.Producto.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        let productoVegetariano = db.Producto.findAll({
            where: [{ condicion: '1' }]
        })
        
        Promise.all([productoVegetariano, producto])

        .then(([productoVegetariano, producto]) => {
            //return res.send (req.session.usuarioIngresado)
            //res.send(productoVegetariano)
            return res.render('pagIndex', {
                producto,
                productoVegetariano
            })
        })
        
        db.Producto.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(respuesta=>{
            return res.render("pagIndex", {respuesta})
            //res.send(respuesta)
        })
        
    },*/
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
*/
        })
        .then(respuesta=>{
            return res.send(respuesta)
        })
        
    }
}