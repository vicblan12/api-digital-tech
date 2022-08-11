const resultado  = require('../models/salida');
const { encriptar, comprobate } = require('./crypt.controllers')
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const db = require('../config/db');

const loginController = async (req, res) => {
    const { correo, passwd } = req.body
    let token = false;
    try {
        const result = await db.query("SELECT u.id, correo, passwd, nombre, apellidos, telefono, direccion, f_nac, role_id, r.tipo, created_at FROM usuarios.users u INNER JOIN usuarios.role r ON u.role_id = r.id WHERE u.correo = $1;", [correo])

        const hash = result.rows[0].passwd
        
        const validate = comprobate(passwd, hash)

        if (validate){
        const payload = {
            check:true
        }
         token = jwt.sign(payload, keys.key, {
            expiresIn: '7d'
        })
        resultado.estatus = 200,
        resultado.mensaje = 'Consulta Exitosa',
        resultado.token = token,
        resultado.mensajeerror = '', 
        resultado.informaciones = result.rows
        return res.status(200).json(resultado);
    }
    else {
        resultado.estatus = 401,
        resultado.mensaje = 'No autorizado',
        resultado.mensajeerror = 'Error', 
        resultado.informaciones = []
        return res.status(401).json(resultado);
    }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    loginController
}