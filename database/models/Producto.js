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
        img_url: {
            type: dataTypes.STRING,
            allowNull: false
        },
        medida: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio_medida: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_adder_id: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
    }

    let config = {
     //  tableName: "productos",
        //timestamps: true,
        underscored: true,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
};