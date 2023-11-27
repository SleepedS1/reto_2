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

const generateRandomCode = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
};

router.post('/crear', (req, res) => {
  const { coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  // Generar el código de vuelo de longitud 6
  const codvuelo = generateRandomCode(6);

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