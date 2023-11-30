const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/consultar', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM vuelo');
    res.json({ vuelos: rows });
  } catch (error) {
    console.error('Error al obtener vuelos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/crear', async (req, res) => {
  const { coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  if (!coddestino || !codaerolinea || !salaabordaje || !horasalida || !horallegada) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const codvuelo = generateAlphanumericCode(6);
  const query = 'INSERT INTO vuelo (codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada];

  try {
    await connection.execute(query, values);
    res.status(201).json({ message: 'Vuelo creado exitosamente', nuevoVuelo: { codvuelo, coddestino, codaerolinea, salaabordaje, horasalida, horallegada } });
  } catch (error) {
    console.error('Error al crear vuelo:', error);
    res.status(500).json({ message: 'Error interno del servidor al crear vuelo.' });
  }
});

router.get('/consultar/:codVuelo', async (req, res) => {
  const codVuelo = req.params.codVuelo;
  const query = 'SELECT * FROM vuelo WHERE codvuelo = ?';

  try {
    const [rows] = await connection.execute(query, [codVuelo]);
    if (rows.length > 0) {
      res.status(200).json({ message: 'Consulta exitosa', vuelo: rows[0] });
    } else {
      res.status(404).json({ message: 'No se encontró el vuelo.' });
    }
  } catch (error) {
    console.error('Error al consultar vuelo:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

router.put('/editar/:codVuelo', async (req, res) => {
  const codVuelo = req.params.codVuelo;
  const { coddestino, codaerolinea, salaabordaje, horasalida, horallegada } = req.body;

  if (!coddestino || !codaerolinea || !salaabordaje || !horasalida || !horallegada) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const query = 'UPDATE vuelo SET coddestino = ?, codaerolinea = ?, salaabordaje = ?, horasalida = ?, horallegada = ? WHERE codvuelo = ?';
  const values = [coddestino, codaerolinea, salaabordaje, horasalida, horallegada, codVuelo];

  try {
    await connection.execute(query, values);
    res.status(200).json({ message: 'Vuelo editado exitosamente' });
  } catch (error) {
    console.error('Error al editar vuelo:', error);
    res.status(500).json({ message: 'Error interno del servidor al editar vuelo.' });
  }
});

function generateAlphanumericCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
    code = code.toUpperCase()
  }
  return code;
}

module.exports = router;
