//Repositorios

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const morgan = require('morgan')

//Exportaciones

const keys = require('./config/keys');
const apiRoutes = require('./routes/api.routes')
const resultado  = require('./models/salida');

//Funciones

const app = express();
app.set('key', keys.key)
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(apiRoutes)
app.use((err, req, res, next) => {
    return res.json(resultado)
})

app.listen(4000, () => {
    console.log('Servidor corriendo en puerto 4000')
})