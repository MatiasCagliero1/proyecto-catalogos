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
        UserAdderId: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
    }

    let config = {
        //tableName: "productos",
        //timestamps: true,
        underscored: true,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};