const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM aerolinea';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener aerolíneas:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
      } else {
        res.status(200).json({ message: 'Consulta exitosa', aerolineas: results });
      }
    });
  });

module.exports = router;
