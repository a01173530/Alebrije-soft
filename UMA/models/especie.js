
const db = require('../util/database');

module.exports = class Especie {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(EspID,NombreEsp) {
        this.EspID = EspID;
        this.NombreEsp = NombreEsp;

    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

      return db.execute('INSERT INTO Especie (EspID,NombreEsp) VALUES (?,?)',
        [this.EspID, this.NombreEsp]
        );
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM Especie')
          
        //return personas;  ORDER BY `EspID` ASC
        
    }

    static fetchOne(EspID) {
        return db.execute('SELECT * FROM Especie WHERE EspID = ?', [EspID]);
    }

    static delete(EspID) {
        return db.execute('DELETE FROM Especie WHERE EspID = ?', [EspID]);
    }

    static fetch(criterio) {
        return db.execute('SELECT * FROM Especie WHERE EspID LIKE ? OR NombreEsp LIKE ?' , ['%'+criterio+'%','%'+criterio+'%']);
    }

}