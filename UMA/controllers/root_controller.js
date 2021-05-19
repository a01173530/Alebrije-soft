const Planta = require('../models/planta');

exports.get=(request, response, next) => {
    Planta.fetchCantidadPlantasMadre()
            .then(([MP, fieldData]) => {
          Planta.fetchNPlantasReproducida()
          .then(([PR, fieldData]) => {
            response.render('pagina_principal', {
              tarjetas: MP,
              x: PR
            });
          }).catch(err => {
            console.log(err);
          });
            })
            .catch(err => {
                  console.log(err);
            });
}