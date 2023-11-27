const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/', (req, res) => {
    res.status(404).json({ message: 'Ruta de login.' });
});

module.exports = router;