module.exports = (sequelize, dataTypes) => {
    let alias = 'Comentario';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING,
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
    }

    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function (models) {
        
        Comentario.belongsTo(models.Usuario, {
                as: 'usuarioId',
                foreignKey: 'usuarios_id'
            },

            Comentario.belongsTo(models.Producto, {
                as: 'productoId',
                foreignKey: 'productos_id'
            }))
    }
    return Comentario;
};