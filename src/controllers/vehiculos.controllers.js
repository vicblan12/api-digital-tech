const resultado  = require('../models/salida');
const db = require('../config/db');
const jwt = require('jsonwebtoken'); //Importamos json web token
const keys = require('../config/keys'); // Llave secreta de los jwt


const listVehicle = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    try {
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

        const result = await db.query('SELECT id, placa, marca, modelo FROM vehiculos.vehiculo;')
        
        if (result.rowCount > 0){
            
            resultado.estatus = 200,
            resultado.mensaje = 'Creación exitosa',
            resultado.mensajeerror = '', 
            resultado.informaciones = result.rows
            return res.status(200).json(resultado);
        }}
    } catch (error) {
        resultado.estatus = 500,
            resultado.mensaje = 'Error',
            resultado.mensajeerror = '', 
            resultado.informaciones = error
            return res.status(500).json(resultado);
    }
}

const createVehicle = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    const { placa, marca, modelo } = req.body
    try {
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

        const result = await db.query("INSERT INTO vehiculos.vehiculo(placa, marca, modelo) VALUES($1, $2, $3);", [placa, marca, modelo])
        
        if (result.rowCount > 0){
            
            resultado.estatus = 200,
            resultado.mensaje = 'Creación exitosa',
            resultado.mensajeerror = '', 
            resultado.informaciones = result.rows
            return res.status(200).json(resultado);
        }}
    } catch (error) {
        resultado.estatus = 500,
            resultado.mensaje = 'Error',
            resultado.mensajeerror = '', 
            resultado.informaciones = error
            return res.status(500).json(resultado);
    }
}

module.exports = {
    listVehicle,
    createVehicle
}