//Importaciones de paquetes NPM
const express = require('express'); 
const morgan = require('morgan');

//Importaciones locales
const config = require('./configure'); 
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const error  = require('./red/errors');

//Configuracion de variable express
const app = express(); 

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuracion de puerto de xpress
app.set('port', config.app.port)

//ruta para utilizar clientes
app.use('/api/clientes',clientes)
app.use('/api/usuarios',usuarios)
app.use(error);

module.exports = app;