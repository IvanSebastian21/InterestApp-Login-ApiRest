const express = require('express');
const router = express.Router();

const pool = require('../database');//Conexión a la db
const { isLoginIn } = require('../lib/auth');

//Metodos HTTP
router.get('/add', isLoginIn, (req, res) => {
    res.render('links/add');
});

//Función que recibe los datos del formulario
router.post('/add', isLoginIn, async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Guardado exitosamente');
    res.redirect('/links/views')
});

//Ruta donde se va a mostrar el enlace con las tarjetas que ah venido creando y guardando nuestro usuario 
router.get('/views', isLoginIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});

//Escucha del evento para "eliminar" la tarjeta
router.get('/delete/:id', isLoginIn, async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Eliminado exitosamente');
    res.redirect('/links/views');
});

//Editamos nuestra tarjeta
router.get('/edit/:id', isLoginIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    //    console.log(links);
    res.render('links/edit', { link: links[0] });
});


router.post('/edit/:id', isLoginIn, async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newLink = {
        title,
        description,
        url
    };
    //    console.log(newLink);
    await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Modificado exitosamente');
    res.redirect('/links/views');
});



module.exports = router;