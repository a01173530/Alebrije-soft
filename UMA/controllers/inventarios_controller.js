const Planta = require('../models/planta');
exports.getSemillas=(request, response, next) => {

	response.render('inventario');

}


exports.getAgregar=(request, response, next) => {

	response.render('registrarPlanta');

}


exports.postAgregar=(request, response, next) => {
	const planta = new Planta(request.body.razon, request.body.zona, request.body.cantidad,request.body.etapa, request.body.especie);

	planta.save()
		.then( () => {
			response.redirect('/inventarios/semillas');
		}).catch( (err) => {
			console.log(err);
			response.redirect('/');
		});
}