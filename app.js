var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//requiero session
const session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/productos');

const db = require("./database/models")
var app = express();

//configuro session
app.use(session({
    secret: "proyecto catalogos",
    resave: false,
    saveUninitialized: true
}))

//info para todas las vistas
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

//implementación de cookies
app.use(cookieParser())
    //middleware para ver si el usuario puso recordarme
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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;