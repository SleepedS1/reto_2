const express = require('express');
const router = express.Router();
const connection = require('../connection');

// Ruta para consultar vuelos
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

// Ruta para crear un nuevo vuelo
router.post('/crear', (req, res) => {
  const { coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  // Puedes realizar la validación de los datos antes de ejecutar la consulta
  if (!coddestino || !codaerolinea || !salaabordaje || !horasalida || !horallegada) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  // Generar un código alfanumérico de 6 caracteres (puedes ajustar la lógica según tus necesidades)
  const codvuelo = generateAlphanumericCode(6);

  const query = 'INSERT INTO vuelo (codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al crear vuelo:', error);
      res.status(500).json({ message: 'Error interno del servidor al crear vuelo.' });
    } else {
      res.status(201).json({ message: 'Vuelo creado exitosamente', nuevoVuelo: { codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada } });
    }
  });
});

// Función para generar un código alfanumérico de longitud específica
function generateAlphanumericCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
    code = code.toUpperCase()
  }
  return code;
}

// ...

// Ruta para obtener información de un vuelo específico
router.get('/consultar/:codVuelo', (req, res) => {
  const codVuelo = req.params.codVuelo;
  const query = 'SELECT * FROM vuelo WHERE codvuelo = ?';
  connection.query(query, [codVuelo], (error, results) => {
    if (error) {
      console.error('Error al consultar vuelo:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Consulta exitosa', vuelo: results[0] });
      } else {
        res.status(404).json({ message: 'No se encontró el vuelo.' });
      }
    }
  });
});

// Ruta para editar un vuelo
router.put('/editar/:codVuelo', (req, res) => {
  const codVuelo = req.params.codVuelo;
  const { coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  // Puedes realizar la validación de los datos antes de ejecutar la consulta
  if (!coddestino || !codaerolinea || !salaabordaje || !horasalida || !horallegada) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const query = 'UPDATE vuelo SET coddestino = ?, codaerolinea = ?, salaabordaje = ?, horasalida = ?, horallegada = ? WHERE codvuelo = ?';
  const values = [coddestino, codaerolinea, salaabordaje, horasalida, horallegada, codVuelo];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al editar vuelo:', error);
      res.status(500).json({ message: 'Error interno del servidor al editar vuelo.' });
    } else {
      res.status(200).json({ message: 'Vuelo editado exitosamente' });
    }
  });
});

// ...


module.exports = router;
