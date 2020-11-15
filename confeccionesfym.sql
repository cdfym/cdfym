-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2020 a las 02:06:32
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `confeccionesfym`
--
CREATE DATABASE IF NOT EXISTS `confeccionesfym` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `confeccionesfym`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepedido`
--

CREATE TABLE `detallepedido` (
  `numeroPedido` int(11) NOT NULL,
  `codigoProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleproducto`
--

CREATE TABLE `detalleproducto` (
  `codigoProducto` int(11) NOT NULL,
  `codigoMaterial` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `medida` int(11) NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallerecepcion`
--

CREATE TABLE `detallerecepcion` (
  `codigoMaterial` int(11) NOT NULL,
  `numeroRecepcion` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiaprima`
--

CREATE TABLE `materiaprima` (
  `codigoMaterial` int(11) NOT NULL,
  `nombreMaterial` text NOT NULL,
  `tipoMaterial` varchar(25) NOT NULL,
  `disponible` int(11) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medidas`
--

CREATE TABLE `medidas` (
  `codigoMedida` int(11) NOT NULL,
  `tipoMedida` int(11) NOT NULL,
  `escalaMedida` int(11) NOT NULL,
  `codigoMaterial` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `codigoPedido` int(11) NOT NULL,
  `fechaPedido` date NOT NULL,
  `cedula` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigoProducto` int(11) NOT NULL,
  `nombreProducto` text NOT NULL,
  `disponible` int(11) NOT NULL,
  `stockMin` int(11) NOT NULL,
  `stockMax` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `presentacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `codigoProveedor` int(11) NOT NULL,
  `razonSocial` text NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `correo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcion`
--

CREATE TABLE `recepcion` (
  `numeroRecepcion` int(11) NOT NULL,
  `fechaRecepcion` date NOT NULL,
  `montoRecepcion` int(11) NOT NULL,
  `codigoProveedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `cedula` varchar(12) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `correo` text NOT NULL,
  `usuario` varchar(16) NOT NULL,
  `clave` text NOT NULL,
  `rolusuario` varchar(16) NOT NULL,
  `visibilidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`cedula`, `nombre`, `apellido`, `telefono`, `correo`, `usuario`, `clave`, `rolusuario`, `visibilidad`) VALUES
('12345678', 'Administrador', 'Admin', '', 'usuarioadmin@gmail.com', 'Administrador', '12345678', 'Administrador', 1),
('12345679', 'Usuario', 'Normal', '', 'usuario@gmail.com', 'Usuario.', '12345678', 'Usuario', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD KEY `codigoProducto` (`codigoProducto`),
  ADD KEY `numeroPedido` (`numeroPedido`);

--
-- Indices de la tabla `detalleproducto`
--
ALTER TABLE `detalleproducto`
  ADD KEY `codigoProducto` (`codigoProducto`),
  ADD KEY `codigoMaterial` (`codigoMaterial`);

--
-- Indices de la tabla `detallerecepcion`
--
ALTER TABLE `detallerecepcion`
  ADD KEY `codigoMaterial` (`codigoMaterial`),
  ADD KEY `numeroRecepcion` (`numeroRecepcion`);

--
-- Indices de la tabla `materiaprima`
--
ALTER TABLE `materiaprima`
  ADD PRIMARY KEY (`codigoMaterial`),
  ADD KEY `codigoMaterial` (`codigoMaterial`);

--
-- Indices de la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD PRIMARY KEY (`codigoMedida`),
  ADD KEY `codigoMaterial` (`codigoMaterial`),
  ADD KEY `codigoMedida` (`codigoMedida`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`codigoPedido`),
  ADD KEY `codigoPedido` (`codigoPedido`),
  ADD KEY `cedula` (`cedula`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigoProducto`),
  ADD KEY `codigoProducto` (`codigoProducto`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`codigoProveedor`),
  ADD KEY `codigoProveedor` (`codigoProveedor`);

--
-- Indices de la tabla `recepcion`
--
ALTER TABLE `recepcion`
  ADD PRIMARY KEY (`numeroRecepcion`),
  ADD KEY `numeroRecepcion` (`numeroRecepcion`),
  ADD KEY `codigoProveedor` (`codigoProveedor`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`cedula`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `cedula` (`cedula`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`numeroPedido`) REFERENCES `pedidos` (`codigoPedido`),
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`codigoProducto`) REFERENCES `productos` (`codigoProducto`);

--
-- Filtros para la tabla `detalleproducto`
--
ALTER TABLE `detalleproducto`
  ADD CONSTRAINT `detalleproducto_ibfk_1` FOREIGN KEY (`codigoProducto`) REFERENCES `productos` (`codigoProducto`),
  ADD CONSTRAINT `detalleproducto_ibfk_2` FOREIGN KEY (`codigoMaterial`) REFERENCES `materiaprima` (`codigoMaterial`);

--
-- Filtros para la tabla `detallerecepcion`
--
ALTER TABLE `detallerecepcion`
  ADD CONSTRAINT `detallerecepcion_ibfk_1` FOREIGN KEY (`codigoMaterial`) REFERENCES `materiaprima` (`codigoMaterial`),
  ADD CONSTRAINT `detallerecepcion_ibfk_2` FOREIGN KEY (`numeroRecepcion`) REFERENCES `recepcion` (`numeroRecepcion`);

--
-- Filtros para la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD CONSTRAINT `medidas_ibfk_1` FOREIGN KEY (`codigoMaterial`) REFERENCES `materiaprima` (`codigoMaterial`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cedula`) REFERENCES `usuarios` (`cedula`);

--
-- Filtros para la tabla `recepcion`
--
ALTER TABLE `recepcion`
  ADD CONSTRAINT `recepcion_ibfk_1` FOREIGN KEY (`codigoProveedor`) REFERENCES `proveedor` (`codigoProveedor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
