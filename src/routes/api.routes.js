
//Repositorios

const { Router }  = require('express');
const { listRent, createRent, updateRent } = require('../controllers/alquiler.controllers');
const router = Router();

//Controllers

const {holaMundo} = require('../controllers/api.controllers');
const { listClient, createClient } = require('../controllers/clientes.controllers');
const { loginController } = require('../controllers/login.controllers');
const { createUserController } = require('../controllers/users.controllers');
const { listVehicle, createVehicle } = require('../controllers/vehiculos.controllers');
const { verifController } = require('../controllers/verificacion.controllers');
const { validateLogin } = require('../validators/login.validator');
const { validateUser } = require('../validators/user.validator');

//Rutas

//Usuarios
router.post('/login', validateLogin ,loginController)
router.post('/user/create', validateUser ,createUserController)

//Verificar Token
router.get('/info', verifController)

//CLientes
router.get('/clients/listar', listClient)
router.post('/clients/create', createClient)

//Vehiculos
router.get('/vehicles/list', listVehicle)
router.post('/vehicles/create', createVehicle)

//Alquiler
router.get('/rents/list', listRent)
router.post('/rents/create', createRent)
router.put('/rents/update', updateRent)

module.exports = router;