const resultado  = require('../models/salida');

const holaMundo = async (req, res) => {
    const hola = 'Hola Mundo'

    try {
        resultado.estatus = 200,
        resultado.mensaje = 'Consulta Exitosa',
        resultado.mensajeerror = hola, 
        resultado.informaciones = []
        return res.status(200).json(resultado);
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    holaMundo
}