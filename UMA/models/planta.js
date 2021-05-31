//buscar database en util
const db = require('../util/database');

module.exports = class Planta {

    constructor(razon, zona, especie){//falta agarrar la id de la cuenta responsable
        this.razon = razon;
        this.zona = zona;
        this.especie = especie;
    }

    savePlantas(){
        return db.execute('INSERT INTO plantas (plantaID, fecha, trasladoID, zonaID, cuentaID) VALUES (NULL, NULL, ?, ?, 1)',
        [this.razon, this.zona]
        ).then( () => {
            db.execute('INSERT INTO planta_especie (fecha, plantaID, EspID) VALUES (NULL, NULL, ?)',
            [this.especie]
            )
        }).catch(err => {
            console.log(err);
        });
    } //save Plantas

    savePlantasMadre(){
        return db.execute('INSERT INTO plantasmadre (plantaMadreID, fecha, trasladoID, zonaID, cuentaID) VALUES (NULL, NULL, ?, ?, 1)',
        [this.razon, this.zona]
        ).then( () => {
            db.execute('INSERT INTO plantamadre_especie (fecha, plantaMadreID, EspID) VALUES (NULL, NULL, ?)',
            [this.especie]
            )
        }).catch(err => {
            console.log(err);
        });
    } //save Plantas Madre

    saveLotesPlantula(){
        return db.execute('INSERT INTO lotesplantula (lotePlantulaID, fecha, trasladoID, zonaID, cuentaID) VALUES (NULL, NULL, ?, ?, 1)',
        [this.razon, this.zona]
        ).then( () => {
            db.execute('INSERT INTO loteplantula_especie (fecha, lotePlantulaID, EspID) VALUES (NULL, NULL, ?)',
            [this.especie]
            )
        }).catch(err => {
            console.log(err);
        });
    } //save Plantas

    saveLotesSemillas(){
        return db.execute('INSERT INTO lotessemilla (loteSemillaID, fecha, trasladoID, zonaID, cuentaID) VALUES (NULL, NULL, ?, ?, 1)',
        [this.razon, this.zona]
        ).then( () => {
            db.execute('INSERT INTO lotesemilla_especie (fecha, loteSemillaID, EspID) VALUES (NULL, NULL, ?)',
            [this.especie]
            )
        }).catch(err => {
            console.log(err);
        });
    } //save Plantas

    static fetchTarjetas(){
        return db.execute('SELECT DISTINCT * FROM tarjetas');
    }

    static fetch(criterio){
        return db.execute('SELECT DISTINCT * FROM tarjetas WHERE NombreEsp LIKE ?',  ['%'+criterio+'%']);
    }
    
}//planta

