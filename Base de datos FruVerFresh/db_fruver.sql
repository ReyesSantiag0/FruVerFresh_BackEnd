-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2023 a las 02:37:57
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_fruver`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(10) NOT NULL,
  `nombre_cliente_pedido` varchar(45) NOT NULL,
  `apellido_cliente_pedido` varchar(45) NOT NULL,
  `telefono_cliente_pedido` varchar(12) NOT NULL,
  `correo_cliente_pedido` varchar(45) NOT NULL,
  `direccion_cliente_pedido` varchar(45) NOT NULL,
  `producto_pedido` varchar(45) NOT NULL,
  `cantidad_pedido` int(11) NOT NULL,
  `precio_pedido` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `nombre_cliente_pedido`, `apellido_cliente_pedido`, `telefono_cliente_pedido`, `correo_cliente_pedido`, `direccion_cliente_pedido`, `producto_pedido`, `cantidad_pedido`, `precio_pedido`) VALUES
(78, 'Benito', 'Reyes', '23456', 'benit@gmail.com', 'Pasto', 'Piña', 1, '35000'),
(79, 'Puala', 'Jaramillo', '3205902369', 'paula@gmail.com', 'Pasto', 'Naranja', 6, '5000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(45) NOT NULL,
  `detalle_producto` varchar(800) NOT NULL,
  `precio_producto` decimal(10,0) NOT NULL,
  `foto_producto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `detalle_producto`, `precio_producto`, `foto_producto`) VALUES
(84, 'Mango', 'El mango es una fruta tropical de origen asiático, de exquisito sabor, que posee unas excelentes cualidades nutricionales y que está indicada para todas las edades. Su cultivo está extendido por zonas de clima tropical de todo el mundo.', '5000', 'assets\\fotos\\mango.png'),
(85, 'Piña', 'La piña madura tiene una fragancia muy singular. Es de hermoso color y agradable sabor agridulce. Se puede comer cruda o como ingrediente en zumos, conservas, licores, etc. Tanto el fruto como las hojas se usan en la preparación de compuestos medicinales. Es ligeramente laxante y normaliza las funciones intestinales. Se trata de una fruta que activa la función pancreática. Es rica en manganeso, el cual apenas está presente en el resto de frutas.', '35000', 'assets\\fotos\\piña.png'),
(86, 'Sandia', 'La sandía es un fruto grande y de forma más o menos esférica que suele consumirse cruda como postre. Su pulpa es de color rojizo o amarillento y de sabor dulce. Resulta un alimento muy refrescante que aporta muy pocas calorías al organismo, también aporta algunas vitaminas y minerales.', '15000', 'assets\\fotos\\sandia.png'),
(87, 'Naranja', 'La naranja es un fruto redondo, color naranja, consumido mayoritariamente en invierno. La pulpa del interior es también anaranjada y está formada por pequeñas bolsitas llenas de zumo.  La naranja se usa para consumo en fresco y, para la industria, principalmente en zumo.', '5000', 'assets\\fotos\\naranja.png'),
(88, 'Brócoli', 'El brócoli es también conocido por términos como brúcoli o brécol. Su nombre botánico es Brassica oleracea L y pertenece a la familia Crucífera, al igual que coles o coliflores.  Posee una forma similar a la coliflor pero con pedúnculos florales menos prietos o compactos, conformando un ramillete o cabeza irregular y abierta. Sus hojas permanecen erguidas, con peciolos desnudos, limbos cuyos bordes se ondulan, así como nervaduras marcadas, blancas.', '3000', 'assets\\fotos\\brocoli.png'),
(89, 'Mandarina', 'La mandarina es una fruta muy apreciada por su sabor y la facilidad para pelarla. Tiene una gran versatilidad culinaria tanto para platos dulces como salados y posee grandes propiedades terapéuticas.     Es una de las frutas preferidas de los niños y rica en antioxidantes La mandarina es una de las frutas favoritas de los niños. Su agradable dulzor unido a su facilidad para pelarlas, hace de esta fruta una de las más populares.', '3800', 'assets\\fotos\\mandarina.png'),
(90, 'Zapallo', 'El zapallo es una hortaliza que se encuentra todas las estaciones, generalmente a buenos precios, en las góndolas de las verdulerías. Posibilita además numerosas formas de preparación: entero, contado en trozos o en mitades, hervido, al vapor, a la parilla, al horno, solo o acompañado con otros ingredientes.', '7000', 'assets\\fotos\\zapallo.png'),
(91, 'Melocotón', 'El melocotón es una típica drupa, un fruto carnoso, con una parte externa sutil (el escarpo membranoso o cáscara, una parte central carnosa, el mesocarpio carnoso y jugoso o pulpa) y una parte interior leñosa (endocarpio leñoso o avellano), que contiene sólo en su interior un semilla ósea. El melocotón es un fruto redondeado y dividido por un surco longitudinal, revestido por una sutil cáscara \"angustiosa\".', '8000', 'assets\\fotos\\melocoton.png'),
(92, 'Pitahaya', 'En el aspecto nutricional, además de ser muy refrescante, la pitahaya es fuente de antioxidantes naturales, contiene vitamina C; entre sus propiedades también destaca su contenido de captina, que contribuye a relajar el sistema nervioso. Además, cuenta con vitamina B2, vital para la producción de glóbulos rojos.', '10000', 'assets\\fotos\\pitahaya.png'),
(93, 'Habichuela', 'Las habichuelas son una buena fuente de fibra, la cual ayuda a disminuir el colesterol malo y debido a que remueve las toxinas puede ayudar a prevenir el cáncer al colon. Las habichuelas son también una rica fuente de minerales, entre los que tenemos: magnesio, hierro, cobre y manganeso.', '3500', 'assets\\fotos\\habichuela.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `apellido_usuario` varchar(255) NOT NULL,
  `edad_usuario` int(11) NOT NULL,
  `telefono_usuario` varchar(255) NOT NULL,
  `correo_usuario` varchar(255) NOT NULL,
  `contrasena_usuario` varchar(255) NOT NULL,
  `tipo_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `edad_usuario`, `telefono_usuario`, `correo_usuario`, `contrasena_usuario`, `tipo_usuario`) VALUES
(1, 'Administrador', 'FruVerFresh', 21, '7299225', 'adminfruverfresh@admin.com', 'adminfruverfresh11', '1'),
(2, 'Luis', 'Suarez Páez', 35, '3111117896', 'paez@gmail.com', '12345', '2'),
(3, 'Alejandra', 'Valencia Mora', 22, '3214374523', 'alejandra@gmail.com', '12345', '2'),
(4, 'Armando', 'Peralta', 35, '3214896352', 'armando@gmail.com', '12345', '2'),
(5, 'Fredy', 'Gonzales', 20, '3178963652', 'fredy@gmail.com', '12345', '2'),
(6, 'Clemente', 'Reyes', 47, '3189632545', 'clemente@gmail.com', '12345', '2'),
(10, 'Paula', 'Jaramillo', 36, '3205902356', 'paula@gmail.com', 'paula123', '2'),
(11, 'Juanito', 'Suarez', 35, '3111117896', 'juanito@gmail.com', '12345', '2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
