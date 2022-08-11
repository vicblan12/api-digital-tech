const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

    const validateLogin = [
       
        check('correo')
            .exists()
            .not()
            .isEmpty()
            .withMessage('El campo de usuario es requerido.')
            .isEmail()
            .withMessage('Ingrese un formato de correo válido.')
            .isLength({ min: 3, max: 150})
            .withMessage('El correo no puede ser menor a 3 carácteres, ni mayor a 150.'),
        check('passwd')
            .exists()
            .not()
            .isEmpty()
            .withMessage('El campo de contraseña es requerido')
            .isLength({ min: 4, max: 15})
            .withMessage('La contraseña no puede ser menor a 4 caracteres.'),
        (req, res, next) => {
            validateResult(req, res, next)
        }
    ]

    module.exports = { validateLogin }
