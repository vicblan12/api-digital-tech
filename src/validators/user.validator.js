const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')
    
const validateUser = [
    check('nombre')
        .exists()
        .not()
        .isEmpty()
        .withMessage('El campo de nombre es requerido.')
        .isAlpha(['es-ES'], {ignore: ' '})
        .withMessage('El nombre solo puede contener letras.')
        .isLength({ min: 3, max: 100})
        .withMessage('El nombre no puede ser menor a 3 caracteres.'),
    check('apellidos')
        .exists()
        .not()
        .isEmpty()
        .withMessage('El campo de apellido es requerido')
        .isAlpha(['es-ES'],  {ignore: ' '})
        .withMessage('El apellido solo puede contener letras.')
        .isLength({ min: 3, max: 100})
        .withMessage('El apellido no puede ser menor a 3 caracteres.'),
    check('telefono')
            .exists()
            .not()
            .isEmpty()
            .withMessage('El campo de Celular es requerido')
            // .isNumeric(['es-ES'], {no_symbols: false},  {ignore: '+'}, {ignore: ` `})
            .matches(/\+[0-9]{3}\s\d{3}\s\d{4}/gm)
            .withMessage('El número celular solo puede contener numeros.')
            .isLength({ min: 8, max: 14})
            .withMessage('El telefono no puede contener menos de 3 caracteres.'),
    check('direccion')
            .exists()
            .not()
            .isEmpty()
            .withMessage('El campo de dirección es requerido')
            .isAlphanumeric(['es-ES'],  {ignore: ' '})
            .withMessage('La dirección solo puede contener letras.')
            .isLength({ min: 3, max: 250})
            .withMessage('La direccion no puede ser menor a 3 caracteres.'),
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
            .isIn(['123', 'password', 'god'])
            .withMessage('No use una contraseña común')
            .isLength({ min: 4, max: 15})
            .withMessage('La contraseña no puede ser menor a 4 caracteres.'),
    check('f_nac')
            .exists()
            .not()
            .isEmpty()
            .withMessage('El campo de Fecha es requerido')
            .isDate()
            .withMessage('Ingrese un formato válido de fecha'),
        (req, res, next) => {
            validateResult(req, res, next)
        }
    ]

    module.exports = { validateUser }
