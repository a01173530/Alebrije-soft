const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'uma_prubeas', //uma_db uma_pruebas uma_prubeas
    password: '',
});

module.exports = pool.promise();
