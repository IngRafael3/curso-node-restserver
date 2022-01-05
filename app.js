require('dotenv').config(); //para que tome todo el archivo .env


const Server = require('./models/server');

const server = new Server(); //instancia del sever

server.listen();  //lanzando el metodo listen



