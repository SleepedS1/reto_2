const express = require('express');
const router = express.Router();

const vuelosRouter = require('./vuelos');
const destinosRouter = require('./destinos');
const aerolineasRouter = require('./aerolineas');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const pasajerosRouter = require('./pasajeros');

router.use('/vuelos', vuelosRouter);
router.use('/destinos', destinosRouter);
router.use('/aerolineas', aerolineasRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/pasajeros', pasajerosRouter);

module.exports = router;
