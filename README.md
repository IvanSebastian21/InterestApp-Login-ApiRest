# Aplicacion Web: Frontend + Backend
[_Enlace_](https://www.linkedin.com/feed/update/urn:li:activity:6872386352856543232/)
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
## Project Screens
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/localhost.png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/register.png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/Captura%20de%20pantalla%20(191).png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/cards.png)   

```JavaScript
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-flash": "^0.1.1",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.1",
    "express-mysql-session": "^2.1.7",
    "express-session": "^1.17.2",
    "express-validator": "^6.13.0",
    "morgan": "^1.10.0",
    "mysql": "^2.18.1",
    "passport": "^0.5.0",
    "passport-local": "^1.0.0",
    "timeago.js": "^4.0.2"
  }
```

<h3><strong> Lenguajes: Backend <strong></h3>
     <h2>
     Javascript <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"/>  |
     Node Js <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268343/readme/pngwing.com_9_nptorj.png"/> |
     Express <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268180/readme/pngwing.com_5_mtcqjs.png"/>    | MySQL <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mysql.svg/800px-Mysql.svg.png"/> | 
     <h2>
<h3><strong> Lenguajes: Frontend <strong></h3>
    <h2>
    html5 <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"/> |
    css3 <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"/> |
    bootstrap5 <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"/> |
    handlebarsJS <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://i.morioh.com/0026584323.png"/> | 
    <h2>
         
 <h3><strong> Herramientas adicionales: <strong></h3>
 
  <h2>
     phpAdmin <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://unaaldia.hispasec.com/wp-content/uploads/2018/06/c4999-phpmyadmin.png"/> |
     MySQL Worckbench <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://yosoy.dev/wp-content/uploads/2013/01/images.jpg"/>
     <h2> 
  
<h3> Contacto: <h3> <img align='right' src="https://user-images.githubusercontent.com/85074756/140621760-a092acaa-bb99-41b2-bc4f-b2d30283fbf2.jpeg" width="180" height="195">
    <a href='https://www.linkedin.com/in/ivan-s-nu%C3%B1ez/' target= "_blank">
     <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635266956/readme/linkedin-logo-png-1825_cjdift.png">
    </a><br>
 <h3> Puedes escribirme a: ivanseba.nez20@gmail.com <h3>
 <br><br>
Saludos!!
