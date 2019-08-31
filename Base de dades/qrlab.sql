-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-05-2018 a las 17:47:26
-- Versión del servidor: 5.7.22-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `qrlab`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comanda`
--

CREATE TABLE `comanda` (
  `id` int(5) NOT NULL,
  `cda_institut` varchar(20) NOT NULL,
  `data` datetime NOT NULL,
  `idU` int(4) NOT NULL,
  `idP` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comanda`
--

INSERT INTO `comanda` (`id`, `cda_institut`, `data`, `idU`, `idP`) VALUES
(5, 'cdaprova', '2018-05-24 16:30:00', 3, 1),
(6, 'cdaprova', '2018-05-24 16:30:00', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detall_comanda`
--

CREATE TABLE `detall_comanda` (
  `unitats` int(6) NOT NULL,
  `qtat` int(6) NOT NULL,
  `idC` int(6) NOT NULL,
  `idS` int(10) NOT NULL,
  `idTE` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envas`
--

CREATE TABLE `envas` (
  `id` int(10) NOT NULL,
  `idTE` int(10) NOT NULL,
  `idM` int(10) NOT NULL,
  `data_obert` date DEFAULT NULL,
  `data_caducitat` date DEFAULT NULL,
  `qtat` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `envas`
--

INSERT INTO `envas` (`id`, `idTE`, `idM`, `data_obert`, `data_caducitat`, `qtat`) VALUES
(1, 2, 6, NULL, NULL, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envas_localitzacio`
--

CREATE TABLE `envas_localitzacio` (
  `idE` int(10) NOT NULL,
  `idL` int(6) NOT NULL,
  `data` datetime NOT NULL,
  `hora` time NOT NULL,
  `idU` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `envas_localitzacio`
--

INSERT INTO `envas_localitzacio` (`idE`, `idL`, `data`, `hora`, `idU`) VALUES
(1, 3, '2018-05-15 00:00:00', '09:16:34', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frase`
--

CREATE TABLE `frase` (
  `id` int(10) NOT NULL,
  `codi` varchar(10) NOT NULL,
  `descripcio` varchar(2000) NOT NULL,
  `tipus` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `frase`
--

INSERT INTO `frase` (`id`, `codi`, `descripcio`, `tipus`) VALUES
(1, 'H200', 'Explosiu inestable.', 'H'),
(2, 'H280', 'Conté un gas refrigerat; pot provocar cremades o lesions criogèniques.', 'H'),
(3, 'H340', 'Pot provocar defectes genètics <cal\r\nindicar la via d’exposició si s’ha demostrat concloentment que el perill no es produeix per cap altra via>.', 'H'),
(4, 'H373', 'Pot provocar danys als òrgans <cal indicar\r\ntots els òrgans afectats, si es coneixen> després d’exposicions prolongades o repetides <cal indicar la via d’exposició si\r\ns’ha demostrat concloentment que el perill no es produeix per cap altra via>.', 'H'),
(5, 'P223', 'Cal mantenir allunyat de qualsevol possible\r\ncontacte amb l’aigua, ja que reacciona\r\nviolentament i pot provocar una flamarada.', 'P');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localitzacio`
--

CREATE TABLE `localitzacio` (
  `id` int(6) NOT NULL,
  `nom` varchar(30) NOT NULL COMMENT 'una serà llençat (codi -1 per exemple)',
  `idL` int(6) DEFAULT NULL,
  `codi` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `localitzacio`
--

INSERT INTO `localitzacio` (`id`, `nom`, `idL`, `codi`) VALUES
(-1, 'producte acabat', NULL, 'FI'),
(1, 'Laboratori o.21', NULL, 'O.21'),
(2, 'Laboratori o.22', NULL, 'O.22'),
(3, 'Laboratori o.23', NULL, 'O.23'),
(4, 'Magatzem 1', NULL, 'M1'),
(5, 'Magatzem 2', NULL, 'M2'),
(8, 'Armari àcids', 4, 'AR1'),
(9, 'Armari dissolvents', 4, 'AR2'),
(10, 'Lleixa alcohols', 8, 'LL1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(10) NOT NULL,
  `nom` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `nom`) VALUES
(1, 'sense marca'),
(2, 'Biorad'),
(3, 'Sigma-Aldrich'),
(4, 'Carlo Erba'),
(5, 'Merck'),
(6, 'Sigma'),
(7, 'BD BBL'),
(8, 'Panreac'),
(9, 'Risec'),
(10, 'Totpur'),
(11, 'Scharlau');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pictograma`
--

CREATE TABLE `pictograma` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `imatge1` varchar(50) NOT NULL,
  `imatge2` varchar(50) DEFAULT NULL,
  `tipus` varchar(100) NOT NULL,
  `descripcio` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pictograma`
--

INSERT INTO `pictograma` (`id`, `nom`, `imatge1`, `imatge2`, `tipus`, `descripcio`) VALUES
(1, 'Explosius', 'explosius.png', NULL, 'Perills físics', 'Substàncies, mescles i articles explosius o amb efecte pirotècnic.'),
(2, 'Gasos inflamables', 'gasosinflamables.png', NULL, 'Perills físics', 'Gas que s\'inflama amb l\'aire a 20ºC i a una pressió de referència de 101\'3kPa.'),
(3, 'Toxicitat aguda', 'toxicitataguda1.png', 'toxicitataguda2.png', 'Perills per a la salut', 'Efectes adversos que es manifesten després\r\nde l’administració per via oral o cutània d’una\r\nsola dosi d’una substància o mescla, de dosis\r\nmúltiples administrades al llarg de 24 hores, o\r\ncom a conseqüència d’una exposició per\r\ninhalació durant 4 hores.'),
(4, 'Toxicitat específica en determinats òrgans (stot) exposicions repetides', 'toxicitatorgans.png', NULL, 'Perills per a la salut', 'Toxicitat específica que es produeix en determinats òrgans després d\'una exposició repetida a una substància o mescla.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveidor`
--

CREATE TABLE `proveidor` (
  `id` int(4) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `actiu` tinyint(1) NOT NULL COMMENT 'activat pels proveidors als quals actualment es fan comandes'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveidor`
--

INSERT INTO `proveidor` (`id`, `nom`, `actiu`) VALUES
(1, 'LABORATORI KAA', 1),
(2, 'Magatzems LAB', 1),
(3, 'UMM Farma', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcio`
--

CREATE TABLE `recepcio` (
  `unitats` int(6) NOT NULL,
  `idC` int(6) NOT NULL,
  `idS` int(10) NOT NULL,
  `idU` int(4) NOT NULL,
  `idE` int(10) NOT NULL,
  `data` datetime NOT NULL,
  `comentari` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `recepcio`
--

INSERT INTO `recepcio` (`unitats`, `idC`, `idS`, `idU`, `idE`, `data`, `comentari`) VALUES
(3, 5, 5, 8, 1, '2018-05-24 17:30:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `substancia`
--

CREATE TABLE `substancia` (
  `id` int(10) NOT NULL,
  `CAS` varchar(40) DEFAULT NULL,
  `puresa` float DEFAULT NULL,
  `nom` varchar(300) NOT NULL,
  `formula` varchar(100) DEFAULT NULL,
  `imatge` varchar(50) DEFAULT NULL,
  `u_min` int(6) DEFAULT NULL,
  `u_estoc` int(6) DEFAULT NULL,
  `qtat` int(10) DEFAULT NULL,
  `magnitut` enum('mg','g','ml','l') DEFAULT NULL,
  `tipus` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `substancia`
--

INSERT INTO `substancia` (`id`, `CAS`, `puresa`, `nom`, `formula`, `imatge`, `u_min`, `u_estoc`, `qtat`, `magnitut`, `tipus`) VALUES
(1, '64-19-7', NULL, 'Acid Acetic Glacial', 'CH3COOH', NULL, 1, 4, 1000, 'ml', 11),
(2, '67-63-0', 99.5, 'Propanol', 'CH3CHOHCH3', NULL, 1, 3, 1000, 'ml', 12),
(3, NULL, NULL, 'Hexanol anhidre', 'C6H14O', NULL, 1, 1, 125, 'ml', 12),
(4, NULL, NULL, 'Nitrobenzè, PRS', 'C6H5NO2', NULL, 1, 1, 1000, 'ml', 13),
(5, NULL, 40, 'Metilamina, 40% sol. Aquosa, PS\r\n', 'CH3NH2', NULL, 1, 1, 1000, 'ml', 14),
(6, '532-32-1', NULL, 'Benzoat de sodi', 'C7H5O2Na', NULL, 1, 1, 500, 'g', 2),
(7, NULL, NULL, 'Hidrogen ftalat potassi, PA', 'C6H4COOHCOOK', NULL, 1, 1, 1000, 'g', 15),
(8, NULL, NULL, 'Dihidrogen Fosfat de potassi anhidre, anàlisi', 'KH2PO4', NULL, 1, 1, 500, 'g', 15),
(9, NULL, NULL, 'Sulfat d\'alumini amònic 12-hidrat, crist.', 'AlNH4(SO4)2·12H2O', NULL, 1, 1, 500, 'g', 16),
(10, NULL, NULL, 'Molibdat amoni 4hidrat, QP', 'Mo7O24(NH4)6·4H2O', NULL, 1, 1, 1000, 'g', 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subs_frase`
--

CREATE TABLE `subs_frase` (
  `idS` int(10) NOT NULL,
  `idF` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `subs_frase`
--

INSERT INTO `subs_frase` (`idS`, `idF`) VALUES
(1, 1),
(1, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subs_picto`
--

CREATE TABLE `subs_picto` (
  `idS` int(10) NOT NULL,
  `idPicto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `subs_picto`
--

INSERT INTO `subs_picto` (`idS`, `idPicto`) VALUES
(3, 1),
(3, 2),
(4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipus_envas`
--

CREATE TABLE `tipus_envas` (
  `id` int(10) NOT NULL,
  `tipologia` varchar(200) NOT NULL COMMENT 'ampolla, envas, general, etc.',
  `material` varchar(50) DEFAULT NULL COMMENT 'vidre, plàstic, metall...'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipus_envas`
--

INSERT INTO `tipus_envas` (`id`, `tipologia`, `material`) VALUES
(1, 'ampolla', 'vidre'),
(2, 'envàs', 'plàstic'),
(3, 'general', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipus_subs`
--

CREATE TABLE `tipus_subs` (
  `id` int(5) NOT NULL,
  `nom` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipus_subs`
--

INSERT INTO `tipus_subs` (`id`, `nom`) VALUES
(1, 'Dissolvents'),
(2, 'Sals de sodi'),
(3, 'Dissolvents Reciclats'),
(4, 'Punts de Fussió'),
(5, 'Solubilitat i Adsorbents'),
(6, 'Metalls'),
(7, 'Sucres'),
(8, 'Polarimetria'),
(9, 'Lubricants'),
(10, 'Patrons'),
(11, 'Acid acétic i derivats d\'àcid acétic'),
(12, 'Alcohols, piridina i formaldehid'),
(13, 'Hidrocarburs alifàtics, aròmatics i clorats'),
(14, 'Amines i reserves d\'alcohols'),
(15, 'Sals de potassi'),
(16, 'Sals d\'alumini'),
(17, 'Sals d\'amoni'),
(18, 'Altres');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuari`
--

CREATE TABLE `usuari` (
  `id` int(4) NOT NULL,
  `codi` varchar(10) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `actiu` tinyint(1) NOT NULL COMMENT 'usuari que aquest curs lectiu utilitza l''aplicació',
  `contrasenya` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuari`
--

INSERT INTO `usuari` (`id`, `codi`, `nom`, `actiu`, `contrasenya`) VALUES
(3, 'Admin', 'Ivan', 1, 'sZZobh3Yrn0KzYrMbx+/OFKHHMZHB/nBD1yPQSzO43I='),
(5, 'ODL1A', 'Operacions de Laboratori 1r A', 1, 'contra1234'),
(6, 'ODL1B', 'Operacions de Laboratori 1r B', 1, 'contra1234'),
(7, 'ODL2A', 'Operacions de Laboratori 2n A', 1, 'contra1234'),
(8, 'ODL2B', 'Operacions de Laboratori 2n B', 1, 'contra1234'),
(9, 'LAC1A', 'Laboratori d’Anàlisi i Control 1r A', 1, 'contra1234'),
(10, 'LAC1B', 'Laboratori d’Anàlisi i Control 1r B', 1, 'contra1234'),
(11, 'LAC2A', 'Laboratori d’Anàlisi i Control 2n A', 1, 'contra1234'),
(12, 'LAC2B', 'Laboratori d’Anàlisi i Control 2n B', 1, 'contra1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comanda`
--
ALTER TABLE `comanda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index` (`cda_institut`),
  ADD KEY `cda_institut` (`cda_institut`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `cda_institut_2` (`cda_institut`),
  ADD KEY `idU` (`idU`),
  ADD KEY `idP` (`idP`);

--
-- Indices de la tabla `detall_comanda`
--
ALTER TABLE `detall_comanda`
  ADD PRIMARY KEY (`idC`,`idS`,`idTE`),
  ADD KEY `idS` (`idS`),
  ADD KEY `idTE` (`idTE`);

--
-- Indices de la tabla `envas`
--
ALTER TABLE `envas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTE` (`idTE`),
  ADD KEY `idM` (`idM`);

--
-- Indices de la tabla `envas_localitzacio`
--
ALTER TABLE `envas_localitzacio`
  ADD PRIMARY KEY (`idE`,`idL`,`idU`,`data`,`hora`),
  ADD KEY `idL` (`idL`),
  ADD KEY `idU` (`idU`);

--
-- Indices de la tabla `frase`
--
ALTER TABLE `frase`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codi` (`codi`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `localitzacio`
--
ALTER TABLE `localitzacio`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codi` (`codi`),
  ADD KEY `idL` (`idL`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pictograma`
--
ALTER TABLE `pictograma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveidor`
--
ALTER TABLE `proveidor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recepcio`
--
ALTER TABLE `recepcio`
  ADD PRIMARY KEY (`idC`,`idS`,`idU`,`idE`),
  ADD KEY `idS` (`idS`),
  ADD KEY `idU` (`idU`),
  ADD KEY `idE` (`idE`);

--
-- Indices de la tabla `substancia`
--
ALTER TABLE `substancia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_substancia` (`CAS`,`puresa`),
  ADD KEY `id` (`id`),
  ADD KEY `tipus` (`tipus`);

--
-- Indices de la tabla `subs_frase`
--
ALTER TABLE `subs_frase`
  ADD PRIMARY KEY (`idS`,`idF`),
  ADD KEY `idF` (`idF`);

--
-- Indices de la tabla `subs_picto`
--
ALTER TABLE `subs_picto`
  ADD PRIMARY KEY (`idS`,`idPicto`),
  ADD KEY `idPicto` (`idPicto`);

--
-- Indices de la tabla `tipus_envas`
--
ALTER TABLE `tipus_envas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipus_subs`
--
ALTER TABLE `tipus_subs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `usuari`
--
ALTER TABLE `usuari`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codi` (`codi`) USING BTREE,
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comanda`
--
ALTER TABLE `comanda`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `envas`
--
ALTER TABLE `envas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `frase`
--
ALTER TABLE `frase`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `localitzacio`
--
ALTER TABLE `localitzacio`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `pictograma`
--
ALTER TABLE `pictograma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `proveidor`
--
ALTER TABLE `proveidor`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `substancia`
--
ALTER TABLE `substancia`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `tipus_envas`
--
ALTER TABLE `tipus_envas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `tipus_subs`
--
ALTER TABLE `tipus_subs`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `usuari`
--
ALTER TABLE `usuari`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comanda`
--
ALTER TABLE `comanda`
  ADD CONSTRAINT `comanda_ibfk_1` FOREIGN KEY (`idU`) REFERENCES `usuari` (`id`),
  ADD CONSTRAINT `comanda_ibfk_2` FOREIGN KEY (`idP`) REFERENCES `proveidor` (`id`);

--
-- Filtros para la tabla `detall_comanda`
--
ALTER TABLE `detall_comanda`
  ADD CONSTRAINT `detall_comanda_ibfk_1` FOREIGN KEY (`idC`) REFERENCES `comanda` (`id`),
  ADD CONSTRAINT `detall_comanda_ibfk_2` FOREIGN KEY (`idS`) REFERENCES `substancia` (`id`),
  ADD CONSTRAINT `detall_comanda_ibfk_3` FOREIGN KEY (`idTE`) REFERENCES `tipus_envas` (`id`);

--
-- Filtros para la tabla `envas`
--
ALTER TABLE `envas`
  ADD CONSTRAINT `envas_ibfk_1` FOREIGN KEY (`idTE`) REFERENCES `tipus_envas` (`id`),
  ADD CONSTRAINT `envas_ibfk_2` FOREIGN KEY (`idM`) REFERENCES `marca` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `envas_localitzacio`
--
ALTER TABLE `envas_localitzacio`
  ADD CONSTRAINT `envas_localitzacio_ibfk_1` FOREIGN KEY (`idE`) REFERENCES `envas` (`id`),
  ADD CONSTRAINT `envas_localitzacio_ibfk_2` FOREIGN KEY (`idL`) REFERENCES `localitzacio` (`id`),
  ADD CONSTRAINT `envas_localitzacio_ibfk_3` FOREIGN KEY (`idU`) REFERENCES `usuari` (`id`);

--
-- Filtros para la tabla `localitzacio`
--
ALTER TABLE `localitzacio`
  ADD CONSTRAINT `localitzacio_ibfk_1` FOREIGN KEY (`idL`) REFERENCES `localitzacio` (`id`);

--
-- Filtros para la tabla `recepcio`
--
ALTER TABLE `recepcio`
  ADD CONSTRAINT `recepcio_ibfk_1` FOREIGN KEY (`idC`) REFERENCES `comanda` (`id`),
  ADD CONSTRAINT `recepcio_ibfk_2` FOREIGN KEY (`idS`) REFERENCES `substancia` (`id`),
  ADD CONSTRAINT `recepcio_ibfk_3` FOREIGN KEY (`idU`) REFERENCES `usuari` (`id`),
  ADD CONSTRAINT `recepcio_ibfk_4` FOREIGN KEY (`idE`) REFERENCES `envas` (`id`);

--
-- Filtros para la tabla `substancia`
--
ALTER TABLE `substancia`
  ADD CONSTRAINT `substancia_ibfk_1` FOREIGN KEY (`tipus`) REFERENCES `tipus_subs` (`id`);

--
-- Filtros para la tabla `subs_frase`
--
ALTER TABLE `subs_frase`
  ADD CONSTRAINT `subs_frase_ibfk_1` FOREIGN KEY (`idS`) REFERENCES `substancia` (`id`),
  ADD CONSTRAINT `subs_frase_ibfk_2` FOREIGN KEY (`idF`) REFERENCES `frase` (`id`);

--
-- Filtros para la tabla `subs_picto`
--
ALTER TABLE `subs_picto`
  ADD CONSTRAINT `subs_picto_ibfk_1` FOREIGN KEY (`idS`) REFERENCES `substancia` (`id`),
  ADD CONSTRAINT `subs_picto_ibfk_2` FOREIGN KEY (`idPicto`) REFERENCES `pictograma` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
