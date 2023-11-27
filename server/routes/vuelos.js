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
        res.status(200).json({ message: 'Consulta Exitosa', vuelos: results });
      } else {
        res.status(404).json({ message: 'No se encontraron vuelos registrados.' });
      }
    }
  });
});

router.post('/crear', (req, res) => {
  // Aquí deberías obtener los datos del cuerpo de la solicitud (req.body)
  // y luego realizar la lógica de inserción en la base de datos.
  // Asumo que el cuerpo de la solicitud contiene los datos necesarios para crear un vuelo.

  const { codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  // Asumiendo que tu tabla en la base de datos se llama "vuelo"
  const query = 'INSERT INTO vuelo (codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(query, [codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada], (error, results) => {
    if (error) {
      console.error('Error al crear vuelo:', error);
      res.status(400).json({ message: 'Error en la solicitud.' });
    } else {
      res.status(201).json({ message: 'Registro exitoso del vuelo.' });
    }
  });
});

module.exports = router;