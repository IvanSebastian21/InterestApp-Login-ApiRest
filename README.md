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
## Project Screens
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/localhost.png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/register.png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/Captura%20de%20pantalla%20(191).png)
![Home](https://github.com/IvanSebastian21/InterestApp-Login-ApiRest/blob/main/Project_nodeJS_express_CRUD/src/public/img/cards.png)  

<h3><strong> Lenguajes: Backend <strong></h3>
    <h2>
     Javascript <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"/>  |
     Node Js <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268343/readme/pngwing.com_9_nptorj.png"/> |
     Express <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268180/readme/pngwing.com_5_mtcqjs.png"/> | MySQL <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mysql.svg/800px-Mysql.svg.png"/> | 
     bcryptjs <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackjava.com%2Fcategory%2Fdemo&psig=AOvVaw15VHc3Z4lq-V95OpdXjgcX&ust=1638672700565000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCWo9iRyfQCFQAAAAAdAAAAABAD"
     <h2>
