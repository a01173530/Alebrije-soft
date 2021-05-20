const Planta = require('../models/planta');

exports.get=(request, response, next) => {
    Planta.fetchTarjetas()
      .then(([t,fieldData]) => {
        response.render('pagina_principal', {
          tarjetas: t
        })
      })
      .catch(err => {
        console.log(err);
      });
}