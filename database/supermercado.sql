-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: supermercado
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.18-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

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
INSERT INTO `comentarios` VALUES (3,'Muy buen producto','2021-04-25',1,1),(4,'Me gusta porque tiene una buena relación calidad p','2021-04-25',1,1),(5,'No lo compres, a mi me vino uno vencido.','2021-04-25',1,1),(6,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',1,1);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `createDate` date NOT NULL,
  `UserAdderId` int(11) DEFAULT NULL,
  `Condicion` varchar(255),
  `medida` int(11) DEFAULT NULL,
    `precioXmedida` FLOAT (11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_95407dd7-28ee-46dc-92a8-7956bc8217b5` (`UserAdderId`),
  CONSTRAINT `FK_95407dd7-28ee-46dc-92a8-7956bc8217b5` FOREIGN KEY (`UserAdderId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

 LOCK TABLES `productos` WRITE;
    /*!40000 ALTER TABLE `productos` DISABLE KEYS */;
    INSERT INTO `productos` VALUES (2,'Papas McCain. Fritas cocinadas, con Cascara','papas.jpg','2021-04-25',2,'Vegano','Kilo',200),(3,'Cerveza Lager Heineken Botella 1 Litro','cerveza.jpg','2021-04-25',1,'Vegano','Litro',400),(4,'Lavavajillas Bio Act.Frutas Cif Bot 500 ml','lavavajillas.jpg','2021-04-25',4,'Vegano','Kilo',300),(5,'Jabon Liquido ALA Para Diluir 500 ml. Nueva formula','jabon.jpg','2021-04-25',5,'Vegano','Kilo',500),(6,'Papas Noisette McCain Bsa 1 kg. Nueva reseta.','papas1.jpg','2021-04-25',2,'Vegano','Kilo',300),(7,'Alfajor Terrabusi Chocolate 50 Gr X 6 Uni','yerba.jpg','2021-04-25',2,'Vegano','Kilo',200),(9,'Pan Artesano Bimbo 500grm. Celiaco','pan.jpg','2021-04-25',2,'Vegano','Kilo',500),(10,'Yerba Mate C/Palo Chamigo Paq 500 Grm','yerba.jpg','2021-04-25',5,'Vegano','Kilo',200);
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-25 10:59:49
