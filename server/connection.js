const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'el_dorado_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    throw err;
  }
  console.log('Conexión exitosa a MySQL.');
});

module.exports = connection;