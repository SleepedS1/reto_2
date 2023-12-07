const express = require('express');
const router = express.Router();
const connection = require('../connection');
const util = require('util');
const jwt = require('jsonwebtoken');
const verifyAsync = util.promisify(jwt.verify);

// Clave secreta para JWT (deberías cambiar esto en un entorno de producción)
const secretKey = '123';

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Por favor, proporciona un nombre de usuario y una contraseña.' });
    }

    try {
        // Verificar las credenciales en la base de datos
        const query = 'SELECT * FROM usuario WHERE username = ? AND password = ?';
        const [results] = await connection.execute(query, [username, password]);

        if (results.length > 0) {
            // Credenciales válidas, generar un token
            const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

            res.status(200).json({ token });
        } else {
            // Credenciales inválidas
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error de inicio de sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ejemplo de ruta protegida (sin manejo de sesiones)
router.get('/ruta-protegida', (req, res) => {
    // Simplemente verifica el token, no hay manejo de sesiones
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    verifyAsync(token, secretKey)
        .then(decoded => {
            res.json({ message: 'Acceso permitido a la ruta protegida', user: decoded });
        })
        .catch(err => {
            return res.status(401).json({ error: 'Token inválido' });
        });
});

module.exports = router;
