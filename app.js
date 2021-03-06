'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar rutas.

//middlewars
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//cargar rutas
var user_routes = require('./rutas/usuarioRutas');
var follow_routes = require('./rutas/followRutas');

//cors

//rutas
app.use('/api', user_routes);
app.use('/api', follow_routes);

//exportar
module.exports = app;