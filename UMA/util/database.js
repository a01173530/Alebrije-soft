const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'uma_pruebas', //uma_db uma_pruebas
    password: '',
});

module.exports = pool.promise();
