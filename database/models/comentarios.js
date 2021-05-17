/* module.exports = (sequelize, dataTypes) => {
    let alias = Productos;
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    }
    let config = {
        //tableName: "productos",
        //timestamps: true,
        underscored: true,
    }

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}; */