// Requiero las dependencias necesarias
var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

// Necesario para Session
var cookieParser = require('cookie-parser');
const session = require("express-session")

// Llamo a los controladores de las rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/productos');

// Requiero la base de datos
const db = require("./database/models")

// Configuro session -- Los valores son un estandar. El resave en false y saveUninitialized en true.
app.use(
    session({
        secret: "proyecto_catalogos",
        resave: false,
        saveUninitialized: true
    })
)

// Comprobar si el el usuario esta logueado en el session
app.use(function(req, res, next) {

    if (req.session.usuarioIngresado != null) {
        res.locals = {
            usuarioLogueado: req.session.usuarioIngresado
        }

    } else {
        res.locals = {
            usuarioLogueado: null
        }
    }

    return next()
})


// Implementación de cookies
app.use(cookieParser())

// middleware para ver si el usuario puso recordarme
app.use(function(req, res, next) {

    if (req.cookies.userId != undefined && req.session.usuarioIngresado === undefined) {

        db.Usuario.findByPk(req.cookies.userId)

        .then(user => {

            req.session.usuarioIngresado = user

            next()

        })

    } else {
        next()
    }
})



// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Las rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);

var createError = require('http-errors');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;