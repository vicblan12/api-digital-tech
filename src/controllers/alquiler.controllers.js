const resultado  = require('../models/salida');
const db = require('../config/db');
const jwt = require('jsonwebtoken'); //Importamos json web token
const keys = require('../config/keys'); // Llave secreta de los jwt


const listRent = async (req, res) => {
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

        const result = await db.query('SELECT a.id, cliente_id, fecha_desde, fecha_hasta, vehiculo_id, estatus_id, p.nombre , p.telefono , v.placa , v.modelo , e.descripcion FROM alquiler.cliente_vehiculo a inner join clientes.persona p on a.cliente_id = p.id inner join vehiculos.vehiculo v on a.vehiculo_id = v.id inner join alquiler.estatus e on a.estatus_id = e.id ;')
        
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

const createRent = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    const { cliente_id, fecha_desde, fecha_hasta, vehiculo_id, estatus_id } = req.body
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

        const result = await db.query("INSERT INTO alquiler.cliente_vehiculo(cliente_id, fecha_desde, fecha_hasta, vehiculo_id) VALUES($1, $2, $3, $4) RETURNING*;", [cliente_id, fecha_desde, fecha_hasta, vehiculo_id])
        
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

const updateRent = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    const { estatus_id, id } = req.body
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

        const result = await db.query("UPDATE alquiler.cliente_vehiculo SET estatus_id= $1 WHERE id = $2 RETURNING*;", [estatus_id, id])
        
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
    listRent,
    createRent,
    updateRent
}