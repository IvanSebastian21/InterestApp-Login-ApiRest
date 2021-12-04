# Aplicacion Web: Frontend + Backend
## ¿En que consiste la App?  
1) Crea una tarjeta con todos aquellos enlaces que creas valiosos y útiles.  
2) Podes agregar un titulo para que puedas identificar el contenido mas rápido.  
3) Posee un campo donde podes anotar todos los apuntes que creas necesario  
4) Podes guardarlos y editarlos. Al mejor estilo CRUD.  

## Caracteristicas
1) Aplicación Web usando Nodejs, express y módulos JS.  
2) La base de gestión de datos: modelo CRUD.  
3) Protección de las rutas del Servidor empleando Middlewares (Autenticación + verificación + encriptado)  
4) Login y Registro de usuario usando base de datos relacional MySql 

### Requerimientos: 
1) Una vez descargado el proyecto, correr por consola `npm install`, luego `npm run dev`  
2) localhost: 4000
3) Nota: La app se conecta a una base de datos MySql bajo el nombre de "database_total_interest" y se levanta en el puerto 3306.  
(Si deseas puedes cambiar tanto el nombre de la db como del puerto: [Enlace](https://expressjs.com/es/guide/database-integration.html#mysql))

```JavaScript
module.exports = {
    database: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'database_total_interest' //Nombre de la base de datos
    }
};
```
```JavaScript
app.set('port', process.env.PORT || 4000)
//Server on
app.listen(app.get('port'), () => {
    console.log('Server ON in port', app.get('port'));
});
```  

<h3> Contacto: <h3> <img align='right' src="https://user-images.githubusercontent.com/85074756/140621760-a092acaa-bb99-41b2-bc4f-b2d30283fbf2.jpeg" width="180" height="195">
    <a href='https://www.linkedin.com/in/ivan-s-nu%C3%B1ez/' target= "_blank">
     <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635266956/readme/linkedin-logo-png-1825_cjdift.png">
    </a><br>
 <h3> Puedes escribirme a: ivanseba.nez20@gmail.com <h3>
 <br><br>
Saludos!
