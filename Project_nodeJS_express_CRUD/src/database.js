const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXIÓN A LA BASE DE DATOS FUE CERRADA');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
        }
        if (err.code === 'ENCONNREFUSED') {
            console.error('SE RECHAZÓ LA CONEXIÓN A LA BASE DE DATOS');
        }
    }
    if (connection) connection.release();
    console.log('Conectado a la base de datos!');
    return;
});


//Convertir callback`s en promesas.
pool.query = promisify(pool.query);
//Cada vez que quiera hacer una consulta a la db voy a poder emplear async await (promesas). ¿Que negoción verdad?

module.exports = pool;