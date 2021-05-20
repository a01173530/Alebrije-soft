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

    static fetchTarjetas(){
        return db.execute('SELECT * FROM tarjetas');
    }
    
}//planta

