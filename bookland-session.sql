-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 17, 2023 at 05:10 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookland-session`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventariodelibros`
--

DROP TABLE IF EXISTS `inventariodelibros`;
CREATE TABLE IF NOT EXISTS `inventariodelibros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `genero` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `autor` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventariodelibros`
--

INSERT INTO `inventariodelibros` (`id`, `titulo`, `genero`, `autor`, `img_id`) VALUES
(11, 'momo', 'novela', 'no se', 'p8wsykueoyqbh0zrmacs'),
(2, 'Pajaro blanco', 'Novela grafica, Historieta', 'Raquel Palacio', 'j02sye76j1smuymazibh'),
(3, 'El hombre en busca de sentido', 'Narrativa personal, Autobiografia', 'Viktor Frankl', 'yuz7sdlmhmn1wrvki3iu'),
(4, 'El Hobbit', 'Novela, Literatura fantástica', 'Antoine de J. R. R. Tolkien', 'z45dsxqyqbaqxezwwx8g'),
(5, 'El principito', 'Ficción especulativa', 'Antoine de Saint-Exupéry', 'xf1ogicaioxaiebzs8c2');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'francisco', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
