const express = require('express');
const router = express.Router();
const path = require('path');
const inventariosController = require('../controllers/inventarios_controller');
const isAuth = require('../util/is-auth');

router.get('/semillas',  isAuth, inventariosController.getSemillas);

router.get('/plantas-madre',  isAuth, inventariosController.getPlantasMadre);

router.get('/agregar',  isAuth, inventariosController.getAgregar);

router.post('/agregar',  isAuth, inventariosController.postAgregar);

router.get('/plantasAlta',  isAuth, inventariosController.getPlantasAlta);
router.get('/plantasBaja',  isAuth, inventariosController.getPlantasBaja);


router.get('/plantulas-alta',  isAuth, inventariosController.getPlantulasAlta);

router.get('/plantulas-baja',  isAuth, inventariosController.getPlantulasBaja);

router.get('/semillas-alta',  isAuth, inventariosController.getSemillasAlta);

router.get('/semillas-baja',  isAuth, inventariosController.getSemillasBaja);



module.exports = router;