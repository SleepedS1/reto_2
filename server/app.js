const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const connection = require('./connection');

const vuelosRouter = require('./routes/vuelos');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const pasajerosRouter = require('./routes/pasajeros');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/dorado/vuelos', vuelosRouter);
app.use('/dorado/pasajeros', pasajerosRouter);
app.use('/dorado/login', loginRouter);
app.use('/dorado/logout', logoutRouter);



app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
