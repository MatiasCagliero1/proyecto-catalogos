module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        img_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        detalle: {
            type: dataTypes.STRING,
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_added: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }

    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};