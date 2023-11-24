const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.post('/crear', flightController.createFlight);
router.get('/consultar', flightController.getFlights);
router.put('/editar/:codvuelo', flightController.editFlight);

module.exports = router;
