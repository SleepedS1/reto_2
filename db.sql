-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla el_dorado_db.aerolinea: ~6 rows (aproximadamente)
INSERT INTO `aerolinea` (`codaerolinea`, `descripcion`) VALUES
	(1, 'Avianca'),
	(2, 'Satena'),
	(3, 'Wingo'),
	(4, 'Latam'),
	(5, 'Ultra Air'),
	(6, 'Easyfly');

-- Volcando datos para la tabla el_dorado_db.destino: ~7 rows (aproximadamente)
INSERT INTO `destino` (`coddestino`, `descripcion`) VALUES
	(1, 'Armenia'),
	(2, 'Barranquilla'),
	(3, 'Cali'),
	(4, 'Cartagena'),
	(5, 'Medellin'),
	(6, 'Santa Marta'),
	(7, 'San Andres');

-- Volcando datos para la tabla el_dorado_db.pasajero: ~0 rows (aproximadamente)

-- Volcando datos para la tabla el_dorado_db.usuario: ~1 rows (aproximadamente)
INSERT INTO `usuario` (`id`, `username`, `password`, `token`) VALUES
	(1, 'administrador', 'administrador', '1');

-- Volcando datos para la tabla el_dorado_db.vuelo: ~5 rows (aproximadamente)
INSERT INTO `vuelo` (`codvuelo`, `coddestino`, `codaerolinea`, `salaabordaje`, `horasalida`, `horallegada`) VALUES
	('6WRYDZ', 7, 4, 'E5', '08:27:00', '19:31:00'),
	('CTU6KF', 3, 3, 'B2', '13:25:00', '15:22:00'),
	('IY7XTC', 5, 6, 'E5', '14:40:00', '15:41:00'),
	('XPOUYJ', 4, 1, 'D4', '00:49:00', '16:49:00'),
	('YDH961', 2, 2, 'C3', '10:00:00', '10:55:00');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
