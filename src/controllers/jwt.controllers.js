const jwt = require('jsonwebtoken'); //Importamos json web token
const resultado  = require('../models/salida');
const keys = require('../config/keys'); // Llave secreta de los jwt

function jwt(token){
    if (token) {
        token = token.slice(7, token.length) //Para obtener el token crudo sin la palabra bearer
        //Le pasamos el token y la llave secreta
        jwt.verify(token, keys.key, (error, decoded) => { 
            if(error){
                resultado.estatus = 401,
                resultado.mensaje = 'Error',
                resultado.mensajeerror = 'El token no es valido', 
                resultado.informaciones = error
                return res.status(401).json(resultado)

                }
        })
}
}
module.exports = {
    jwt
}