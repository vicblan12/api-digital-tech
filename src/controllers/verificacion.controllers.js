const jwt = require('jsonwebtoken'); //Importamos json web token
const resultado  = require('../models/salida');
const keys = require('../config/keys'); // Llave secreta de los jwt

const verifController = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'] // variable para obetener el token
    try {
        if (token) {
        token = token.slice(7, token.length) //Para obtener el token crudo sin la palabra bearer
        //Le pasamos el token y la llave secreta
        jwt.verify(token, keys.key, (error, decoded) => { 
            if(error){
                resultado.estatus = 401,
                resultado.mensaje = 'Error',
                resultado.mensajeerror = 'El token no es valido', 
                resultado.informaciones = []
                return res.status(401).json(resultado)

                }
        })
        resultado.estatus = 200,
        resultado.mensaje = 'Token Valido',
        resultado.mensajeerror = '', 
        resultado.informaciones = []
        return res.status(200).json(resultado);
        }
    } catch (error) {
        resultado.estatus = 500,
        resultado.mensaje = 'Ha ocurrido un error',
        resultado.mensajeerror = '', 
        resultado.informaciones = []
        return res.status(500).json(resultado);
    }

}

module.exports = {
    verifController
}