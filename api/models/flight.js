const mysql = require('mysql2');

const Flight = mysql.model('Flight', {
  codvuelo: { type: String, required: true },
  // ... otros campos del modelo
});

module.exports = Flight;
