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
            type: dataTypes.STRING
        },
        detalle: {
            type: dataTypes.STRING,
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userAdded: {
            type: dataTypes.BOOLEAN,
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
        tableName: "productos",
        timestamps: true,
        underscored: false,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};