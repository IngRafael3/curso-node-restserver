const express = require('express')
const cors = require('cors')

class Server{ //clase servidor

    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //MIdedlewares=funciones que le añaden otra funcionalidad al webserver
        this.middlewares();

        //Rutas de la aplicacion
        this.routes(); 
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        
        //lectura y parseo del body
        this.app.use( express.json());
        //Directorio de la carpeta publica
        this.app.use(express.static('public')); //para que sea un middleware se usa la palabra clave 'use'
    }

routes(){  //metodo para las rutas o poner mas rutas
   
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
}

listen () {   //metodo para llamado a la variable de entorno donde esta el puerto
        this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en ', this.port);
        })
    }

}


module.exports =  Server;