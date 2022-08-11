const resultado  = require('../models/salida');
const db = require('../config/db');
const encrypt = require("bcryptjs");
const jwt = require('jsonwebtoken'); //Importamos json web token
const keys = require('../config/keys'); // Llave secreta de los jwt
const { transporter } = require('../config/mailer')

//Función global

const encriptar = function (password) {
    return encrypt.hashSync(password, encrypt.genSaltSync(8), null); //funcion para encriptar contraseña
  };

const createUserController = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    const {correo,passwd,nombre,apellidos,telefono,direccion,f_nac} = req.body;
    const hashCrypt = encriptar(passwd); //usamos la funcion global para encriptar
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
            
             await transporter.sendMail({
                from: '"Verifica tu cuenta de correo 👻" <digital.tech.soporte1@gmail.com>', // sender address
                to: correo, // list of receivers
                subject: "Verifica tu cuenta de correo", // Subject line
                html: `<b>Por favor ingresa en el siguiente link para verificar tu cuenta<b>
                    <a>LINK</a>
                `, // html body
              });

        const result = await db.query('INSERT INTO usuarios.users(correo, passwd, nombre, apellidos,telefono, direccion, f_nac) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING*;', [
            correo,
            hashCrypt,
            nombre,
            apellidos,
            telefono,
            direccion,
            f_nac])
        
        if (result.rowCount > 0){
            
            resultado.estatus = 200,
            resultado.mensaje = 'Creación exitosa',
            resultado.mensajeerror = '', 
            resultado.informaciones = result.rows
            return res.status(200).json(resultado);
        }}
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUserController
}