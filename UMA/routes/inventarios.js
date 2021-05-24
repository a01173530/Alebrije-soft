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
router.post('/plantasAlta', isAuth, inventariosController.postPlantasAlta)

router.get('/plantasBaja',  isAuth, inventariosController.getPlantasBaja);


router.get('/plantulas-alta',  isAuth, inventariosController.getPlantulasAlta);
router.post('/plantulas-alta', isAuth, inventariosController.postPlantulasAlta);

router.get('/plantulas-baja',  isAuth, inventariosController.getPlantulasBaja);



router.get('/semillasAlta',  isAuth, inventariosController.getSemillasAlta);

router.get('/semillasBaja',  isAuth, inventariosController.getSemillasBaja);





module.exports = router;