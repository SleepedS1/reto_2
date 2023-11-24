const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/dorado/vuelos', flightRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
