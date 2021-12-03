//arranca la aplicación
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');


//Inicializaciones
const app = express();
require('./lib/passport');

//configuraciones
app.set('port', process.env.PORT || 4000);//Definimos un puerto, si existe lo usa, de lo contrario usa 4000
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
        helpers: require("./lib/handlebars"),
    })
);
app.set("view engine", ".hbs");


//middlewares
app.use(session({
    secret: 'sessionInicializada',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());//Enviamos mensajes al usuario
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //Aceptamos los datos que nos dan los usuarios
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//Variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');//Disponemos de todas las vistas en nuestra aplicación
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));//Defino el prefijo de la ruta '/links/etc...'


//Public
app.use(express.static(path.join(__dirname, 'public')));


//Server on
app.listen(app.get('port'), () => {
    console.log('Server ON in port', app.get('port'));
});