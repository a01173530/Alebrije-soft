//buscar database en util
const db = require('../util/database');

module.exports = class Planta {

    constructor(razon, zona, cantidad, etapa, especie){//falta agarrar la id de la cuenta responsable
        this.razon = razon;
        this.zona = zona;
        this.cantidad = cantidad;
        this.etapa = etapa;
        this.especie = especie;
    }

    save(){
        return db.execute('INSERT INTO bitacora (bitacoraID, fecha, trasladoID, zonaID, cuentaID, cantidad) VALUES (NULL, NULL, ?, ?, 1, ?)',
        [this.razon, this.zona, this.cantidad]
        ).then( () => {
            db.execute('INSERT INTO bitacora_etapa (Fecha, bitacoraID, etapaID) VALUES (NULL, NULL, ?)',
            [this.etapa]
            ).then( () => {
                db.execute('INSERT INTO registro_especie (fecha, bitacoraID, EspID) VALUES (NULL, NULL, ?)',
                [this.especie]
                )
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    } //save 

    static fetchCantidadPlantasMadre(){
        return db.execute('SELECT NombreEsp, SUM(cantidad) as cantidadPlantasMadre FROM bitacora B, bitacora_etapa BE, especie E, etapa ET, registro_especie RE, traslado T WHERE B.bitacoraID = BE.bitacoraID AND BE.etapaID = ET.etapaID AND RE.bitacoraID = B.bitacoraID AND ET.etapaID = BE.etapaID AND B.trasladoID = T.trasladoID AND RE.EspID = E.EspID AND BE.etapaID = "MP" GROUP BY NombreEsp');
    }

    static fetchNPlantasReproducida(){
        return db.execute('SELECT NombreEsp, nombreEtapa, razonTraslado, SUM(cantidad) as cantidadPlantasReproducidas FROM bitacora B, bitacora_etapa BE, especie E, etapa ET, registro_especie RE, traslado T WHERE B.bitacoraID = BE.bitacoraID AND BE.etapaID = ET.etapaID AND RE.bitacoraID = B.bitacoraID AND ET.etapaID = BE.etapaID AND B.trasladoID = T.trasladoID AND RE.EspID = E.EspID AND BE.etapaID = "P" AND T.trasladoID = "7" GROUP BY E.EspID');
    }

    
}//planta

