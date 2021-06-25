module.exports = (sequelize, dataTypes) => {
    let alias = 'Comentario';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            defaultValue: true,
            unique: true
        },
        texto: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha_comentario: {
            type: dataTypes.DATE,
            allowNull: false
        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        productos_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
        
    }
    let config = {
        timestamps: true,
        underscored: true,
    }

    const Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as: 'usuariosId',
            foreignKey: 'usuarios_id'
        },
        Comentario.belongsTo(models.Producto, {
            as: 'productosId',
            foreignKey: 'productos_id'
        }))
    }
    return Comentario;
};