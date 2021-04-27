const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'uma_db',
    password: '',
});

module.exports = pool.promise();
