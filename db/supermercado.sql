
DROP DATABASE IF EXISTS SUPERMERCADO;
CREATE DATABASE SUPERMERCADO;
 USE  SUPERMERCADO;
 
--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `img_name` varchar(255),
  `detalle` varchar(255) NOT NULL,
  `condicion` varchar(255) NOT NULL,
  `userAdded` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_95407dd7-28ee-46dc-92a8-7956bc8217b5` (`userAdded`),
  CONSTRAINT `FK_95407dd7-28ee-46dc-92a8-7956bc8217b5` FOREIGN KEY (`userAdded`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES 
(1, 'Yerba Mate CHAMIGO 500g', 'yerba.jpg', 'Yerba Chamigo ideal para toda la familia.', 1, 1, '2021-04-25', '2021-04-25'),
(2, 'Papas Noisettes Mc Cain 1kg', 'papas1.jpg', 'Papar ricas para disfrutar.', 4, 2, '2021-04-25', '2021-04-25'),
(3, 'Papas Finas Mc Cain 1kg', 'papas.jpg', 'Papar ricas para disfrutar. Buenisimas!', 4, 3, '2021-04-25', '2021-04-25'),
(4, 'Pan Bimbo Artesano Receta Original 500g', 'pan.jpg', 'Pan de los mejores arrtesanos de Bimbo.', 3, 3, '2021-04-25', '2021-04-25'),
(5, 'Mermelada Patagonia Berries 100% Natural', 'mermelada.jpg', 'Mermelada rica sabor Berries.', 3, 4, '2021-04-25', '2021-04-25'),
(6, 'Liquido limpiador ALA lavado perfecto 3L', 'jabon.jpg', 'Limpiador para ropa ALA.', 4, 4, '2021-04-25', '2021-04-25'),
(7, 'Cerveza Heineken Premium Quality', 'cerveza.jpg', 'Heineken para disfrutar con amigos.', 4, 3, '2021-04-25', '2021-04-25'),
(8, 'Coca Cola Original 1,5L', 'coca_cola.jpg', 'Coca Cola para compartir felicidad.', 4, 3, '2021-04-25', '2021-04-25'),
(9, 'Alfajor Terrabusi Clatico 300g', 'alfajor.jpg', 'Alfabores ricos de chocolate.', 4, 3, '2021-04-25', '2021-04-25'),
(10, 'Fideos Matarazzo 500g', 'fideos.jpg', 'Fideos ricos para compartir en familia. Matarazzo.', 4, 2, '2021-04-25', '2021-04-25');

/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
--



-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nacimiento` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'agostina','cervio','agos@hotmail.com','agosCervio','agos123','2001-08-26'),(2,'santiago','karagozian','santi@hotmail.com','santiKaragozian','santi123','2001-08-26'),(3,'matias','cagliero','mati@hotmail.com','matiCagliero','mati123','2001-08-26'),(4,'ramon','diaz','ramon@hotmail.com','ramonDiaz','ramon','2001-08-26'),(5,'juan','gomez','juan@hotmail.com','juanGomez','juan123','2001-08-26');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;



-- Dumping data for table `comentarios`

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(50) DEFAULT NULL,
  `fecha_comentario` date NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_59549d28-20d0-4cd7-9199-a731eec636d4` (`usuarios_id`),
  KEY `FK_ebc754eb-4d64-445b-8845-889d7f2dc391` (`productos_id`),
  CONSTRAINT `FK_59549d28-20d0-4cd7-9199-a731eec636d4` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FK_ebc754eb-4d64-445b-8845-889d7f2dc391` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--


LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios`  VALUES (1,'Muy buen pr','2021-04-25',1,1),(2,'Me gusta porque tiene una buena relación cal','2021-04-25',1,1),(3,'No lo compres, a mi me vino uno ve','2021-04-25',1,1);
INSERT INTO `comentarios` VALUES (4,'Muy buen pr','2021-04-25',2,2),(5,'Me gusta porque tiene una buena relación cal','2021-04-25',2,2),(6,'No lo compres, a mi me vino uno ve','2021-04-25',2,2),(7,'Para recetas sobre como cocinar un buen bisc','2021-04-25',2,2);
INSERT INTO `comentarios` VALUES (8,'Muy buen pr','2021-04-25',3,3),(9,'Me gusta porque tiene una buena relación cal','2021-04-25',3,3),(10,'No lo compres, a mi me vino uno ve','2021-04-25',3,3),(11,'Para recetas sobre como cocinar un buen bisc','2021-04-25',3,3);
INSERT INTO `comentarios` VALUES (12,'Muy buen pr','2021-04-25',4,4),(13,'Me gusta porque tiene una buena relación cal','2021-04-25',4,4),(14,'No lo compres, a mi me vino uno ve','2021-04-25',4,4),(15,'Para recetas sobre como cocinar un buen bisc','2021-04-25',4,4);
INSERT INTO `comentarios` VALUES (16,'Muy buen pr','2021-04-25',2,5),(17,'Me gusta porque tiene una buena relación cal','2021-04-25',2,5),(18,'No lo compres, a mi me vino uno ve','2021-04-25',2,5),(19,'Para recetas sobre como cocinar un buen bisc','2021-04-25',2,5);
INSERT INTO `comentarios` VALUES (20,'Muy buen pr','2021-04-25',3,6),(21,'Me gusta porque tiene una buena relación cal','2021-04-25',3,6),(22,'No lo compres, a mi me vino uno ve','2021-04-25',3,6),(23,'Para recetas sobre como cocinar un buen bisc','2021-04-25',3,6);
INSERT INTO `comentarios` VALUES (24,'Muy buen pr','2021-04-25',4,7),(25,'Me gusta porque tiene una buena relación cal','2021-04-25',4,7),(26,'No lo compres, a mi me vino uno ve','2021-04-25',4,7),(27,'Para recetas sobre como cocinar un buen bisc','2021-04-25',4,7);
INSERT INTO `comentarios` VALUES (28,'Muy buen pr','2021-04-25',2,8),(29,'Me gusta porque tiene una buena relación cal','2021-04-25',2,8),(30,'No lo compres, a mi me vino uno ve','2021-04-25',2,8),(31,'Para recetas sobre como cocinar un buen bisc','2021-04-25',2,8);
INSERT INTO `comentarios` VALUES (32,'Muy buen pr','2021-04-25',3,9),(33,'Me gusta porque tiene una buena relación cal','2021-04-25',3,9),(34,'No lo compres, a mi me vino uno ve','2021-04-25',3,9),(35,'Para recetas sobre como cocinar un buen bisc','2021-04-25',3,9);
INSERT INTO `comentarios` VALUES (36,'Muy buen pr','2021-04-25',4,10),(37,'Me gusta porque tiene una buena relación cal','2021-04-25',4,10),(38,'No lo compres, a mi me vino uno ve','2021-04-25',4,10),(39,'Para recetas sobre como cocinar un buen bisc','2021-04-25',4,10);

/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2021-04-25 10:59:49


