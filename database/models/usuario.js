module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        nacimiento: {
            type: dataTypes.DATE
        },
        role: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        imgUsuario: {
            type: dataTypes.STRING
        }

    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
    }

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
};