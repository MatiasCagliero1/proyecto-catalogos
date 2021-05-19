module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
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
        nombre: {
            type: dataTypes.STRING,
            timestamps: false,
            notnull: true
        },
        apellido: {
            type: dataTypes.STRING,
            timestamps: false,
            notnull: true
        },
        email: {
            type: dataTypes.STRING,
            timestamps: false,
            notnull: true
        },
        Usuario: {
            type: dataTypes.STRING,
            timestamps: false,
            notnull: true,
            unique: true
        },
        contraseña: {
            type: dataTypes.STRING,
            timestamps: false,
            notnull: true
        },
        nacimiento: {
            type: dataTypes.DATE,
            timestamps: false,
            notnull: true
        }

    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
    }

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
};