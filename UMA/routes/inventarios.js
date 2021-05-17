const express = require('express');
const router = express.Router();
const path = require('path');
const inventariosController = require('../controllers/inventarios_controller');
const isAuth = require('../util/is-auth');

router.get('/semillas',  isAuth, inventariosController.getSemillas);

router.get('/plantas-madre',  isAuth, inventariosController.getPlantasMadre);

router.get('/agregar',  isAuth, inventariosController.getAgregar);

router.post('/agregar',  isAuth, inventariosController.postAgregar);

router.get('/plantas',  isAuth, inventariosController.getPlantas);

module.exports = router;