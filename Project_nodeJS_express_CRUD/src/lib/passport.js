const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//Enlace: https://www.npmjs.com/package/passport
//Enlace: https://www.npmjs.com/package/passport-local
//./src/views/auth


const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done) => {
    /*     console.log(req.body);
        console.log(username);
        console.log(password); */

    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    //comprobación de la existencia del usuario.
    if (rows.length > 0) {
        const user = rows[0];//Guardamos el usuario
        //Validar contraseña    
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
            done(null, user, req.flash('success', 'Hola ' + user.username + "!"));
        } else {
            done(null, false, req.flash('message', 'Contraseña Invalida. Intente de nuevo.'))
        }
    } else {
        return done(null, false, req.flash('message', 'Error en el nombre del Usuario'));
    }
}));


passport.use('local.signup', new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done) => {
    //  console.log(req.body)
    const { fullname } = req.body;//exportamos fullname de req.body

    const newUser = {
        username,
        password,
        fullname
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    //  console.log(result)
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});