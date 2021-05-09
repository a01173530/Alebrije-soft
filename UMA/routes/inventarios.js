const express = require('express');
const router = express.Router();
const path = require('path');
const inventariosController = require('../controllers/inventarios_controller');
const isAuth = require('../util/is-auth');

router.get('/semillas',  isAuth, inventariosController.getSemillas);

router.get('/agregar',  isAuth, inventariosController.getAgregar);


module.exports = router;