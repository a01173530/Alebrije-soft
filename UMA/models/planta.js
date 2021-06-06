//buscar database en util
const db = require('../util/database');

module.exports = class Planta {

    constructor(razon, zona, especie){//falta agarrar la id de la cuenta responsable
        this.razon = razon;
        this.zona = zona;
        this.especie = especie;
    }

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
    } //save Plantas

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


    static bajarPlantas(razon, minimo, maximo){
        return db.execute('UPDATE plantasactivas SET trasladoID = ?, fecha = current_timestamp() WHERE plantaID BETWEEN ? AND ?', [razon, minimo, maximo]);
    }

    static bajarPlantasMadre(razon, minimo, maximo){
        return db.execute('UPDATE plantasmadreactivas SET trasladoID = ?, fecha = current_timestamp() WHERE plantaMadreID BETWEEN ? AND ?', [razon, minimo, maximo]);
    }

    static fetchTarjetas(){
        return db.execute('SELECT DISTINCT * FROM tarjetas');
    }

    static fetch(criterio){
        return db.execute('SELECT DISTINCT * FROM tarjetas WHERE NombreEsp LIKE ?',  ['%'+criterio+'%']);
    }

    static fetchResumenPlantas(){
        return db.execute('SELECT MIN(plantasactivas.plantaID) as minimo, MAX(plantasactivas.plantaID) as maximo, COUNT(plantasactivas.plantaID) as total FROM plantasactivas');
    }

    static fetchBuscarPlantas(especie, fecha){
        return db.execute('SELECT IFNULL(MIN(plantasactivas.plantaID), 0) as minimo, IFNULL(MAX(plantasactivas.plantaID), 0) as maximo, COUNT(plantasactivas.plantaID) as total FROM plantasactivas, planta_especie WHERE plantasactivas.plantaID = planta_especie.plantaID AND plantasactivas.fecha LIKE ? AND EspID = ?', ['%'+fecha+'%', especie]);
    }

    static fetchResumenPlantasMadre(){
        return db.execute('SELECT MIN(plantasmadreactivas.plantaMadreID) as minimo, MAX(plantasmadreactivas.plantaMadreID) as maximo, COUNT(plantasmadreactivas.plantaMadreID) as total FROM plantasmadreactivas');
    }

    static fetchBuscarPlantasMadre(especie, fecha){
        return db.execute('SELECT IFNULL(MIN(plantasmadreactivas.plantaMadreID), 0) as minimo, IFNULL(MAX(plantasmadreactivas.plantaMadreID), 0) as maximo, COUNT(plantasmadreactivas.plantaMadreID) as total FROM plantasmadreactivas, plantamadre_especie WHERE plantasmadreactivas.plantaMadreID = plantamadre_especie.plantaMadreID AND plantasmadreactivas.fecha LIKE ? AND EspID = ?', ['%'+fecha+'%', especie]);
    }
    
}//planta