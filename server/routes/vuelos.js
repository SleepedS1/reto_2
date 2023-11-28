const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/consultar', (req, res) => {
  const query = 'SELECT * FROM vuelo';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al consultar vuelos:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Consulta exitosa', vuelos: results });
      } else {
        res.status(404).json({ message: 'No se encontraron vuelos registrados.' });
      }
    }
  });
});

module.exports = router;