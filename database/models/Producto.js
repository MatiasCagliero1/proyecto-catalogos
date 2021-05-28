module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        productName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: dataTypes.STRING,
            allowNull: false
        },
        medida: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precioMedida: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userAdderId: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },

    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};