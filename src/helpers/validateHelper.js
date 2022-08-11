const { validationResult } = require('express-validator');
const resultado  = require('../models/salida');


    const validateResult = (req, res, next) => {
        try {
            if(!req.headers.authorization) {
                resultado.estatus = 403,
                resultado.mensaje = '',
                resultado.mensajeerror = 'Error al validar',
                resultado.informaciones =[error]
                return res.status(403).json(resultado)
            }
            validationResult(req).throw()
            return next()

        } catch (error) {
    
        resultado.estatus = 403,
        resultado.mensaje = '',
        resultado.mensajeerror = 'Error al validar',        
        resultado.informaciones =[error]
      return res.status(403).json(resultado)
        }
    }

    module.exports= { validateResult }