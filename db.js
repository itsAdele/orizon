const mysql = require('mysql2/promise');

// Creazione di un 'pool' di connessioni
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      // L'utente predef. di XAMPP
  password: '',      // Di base XAMPP non ne ha 
  database: 'orizon_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;