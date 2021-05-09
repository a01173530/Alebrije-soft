exports.getSemillas=(request, response, next) => {

	response.render('inventario');

}


exports.getAgregar=(request, response, next) => {

	response.render('registrarPlanta');

}