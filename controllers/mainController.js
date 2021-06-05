const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        db.Producto.findAll(/*{
            order: [
                ['']
            ]
        }*/)
        .then(respuesta=>{
            return res.render("pagIndex", {respuesta})
        })
        
    }
}