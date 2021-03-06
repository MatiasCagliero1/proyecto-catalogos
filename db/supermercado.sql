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
  `createAt` datetime DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_59549d28-20d0-4cd7-9199-a731eec636d4` (`usuarios_id`),
  KEY `FK_ebc754eb-4d64-445b-8845-889d7f2dc391` (`productos_id`),
  CONSTRAINT `FK_59549d28-20d0-4cd7-9199-a731eec636d4` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FK_ebc754eb-4d64-445b-8845-889d7f2dc391` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Muy buen producto','2021-04-25',1,4,NULL,NULL),(2,'Me gusta porque tiene una buena relación calidad p','2021-04-25',1,4,NULL,NULL),(3,'No lo compres, a mi me vino uno vencido.','2021-04-25',1,4,NULL,NULL),(4,'Muy buen producto','2021-04-25',2,2,NULL,NULL),(5,'Me gusta porque tiene una buena relación calidad p','2021-04-25',2,2,NULL,NULL),(6,'No lo compres, a mi me vino uno vencido.','2021-04-25',2,2,NULL,NULL),(7,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',2,2,NULL,NULL),(8,'Muy buen producto','2021-04-25',3,3,NULL,NULL),(9,'Me gusta porque tiene una buena relación calidad p','2021-04-25',3,3,NULL,NULL),(10,'No lo compres, a mi me vino uno vencido.','2021-04-25',3,3,NULL,NULL),(11,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',3,3,NULL,NULL),(12,'Muy buen producto','2021-04-25',4,4,NULL,NULL),(13,'Me gusta porque tiene una buena relación calidad p','2021-04-25',4,4,NULL,NULL),(14,'No lo compres, a mi me vino uno vencido.','2021-04-25',4,4,NULL,NULL),(15,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',4,4,NULL,NULL),(16,'Muy buen producto','2021-04-25',2,5,NULL,NULL),(17,'Me gusta porque tiene una buena relación calidad p','2021-04-25',2,5,NULL,NULL),(18,'No lo compres, a mi me vino uno vencido.','2021-04-25',2,5,NULL,NULL),(19,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',2,5,NULL,NULL),(20,'Muy buen producto','2021-04-25',3,6,NULL,NULL),(21,'Me gusta porque tiene una buena relación calidad p','2021-04-25',3,6,NULL,NULL),(22,'No lo compres, a mi me vino uno vencido.','2021-04-25',3,6,NULL,NULL),(23,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',3,6,NULL,NULL),(24,'Muy buen producto','2021-04-25',4,7,NULL,NULL),(25,'Me gusta porque tiene una buena relación calidad p','2021-04-25',4,7,NULL,NULL),(26,'No lo compres, a mi me vino uno vencido.','2021-04-25',4,7,NULL,NULL),(27,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',4,7,NULL,NULL),(32,'Muy buen producto','2021-04-25',3,9,NULL,NULL),(33,'Me gusta porque tiene una buena relación calidad p','2021-04-25',3,9,NULL,NULL),(34,'No lo compres, a mi me vino uno vencido.','2021-04-25',3,9,NULL,NULL),(35,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',3,9,NULL,NULL),(36,'Muy buen producto','2021-04-25',4,10,NULL,NULL),(37,'Me gusta porque tiene una buena relación calidad p','2021-04-25',4,10,NULL,NULL),(38,'No lo compres, a mi me vino uno vencido.','2021-04-25',4,10,NULL,NULL),(39,'Para recetas sobre como cocinar un buen biscocho e','2021-04-25',4,10,NULL,NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `img_name` varchar(255) DEFAULT NULL,
  `detalle` varchar(255) NOT NULL,
  `condicion` varchar(255) NOT NULL,
  `userAdded` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productosUsers` (`userAdded`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (15,'Yerba Mate CHAMIGO 500g','yerba.jpg','Yerba Chamigo ideal para toda la familia.','2','1','2021-01-25 00:00:00','2021-04-25 00:00:00'),(16,'Papas Noisettes Mc Cain 1kg','papas1.jpg','Papar ricas para disfrutar.','4','2','2021-02-25 00:00:00','2021-04-25 00:00:00'),(17,'Papas Finas Mc Cain 1kg','papas.jpg','Papar ricas para disfrutar. Buenisimas!','4','3','2021-03-25 00:00:00','2021-04-25 00:00:00'),(18,'Pan Bimbo Artesano Receta Original 500g','pan.jpg','Pan de los mejores arrtesanos de Bimbo.','3','3','2021-04-25 00:00:00','2021-04-25 00:00:00'),(19,'Mermelada Patagonia Berries 100% Natural','mermelada.jpg','Mermelada rica sabor Berries.','3','4','2021-05-25 00:00:00','2021-04-25 00:00:00'),(20,'Liquido limpiador ALA lavado perfecto 3L','jabon.jpg','Limpiador para ropa ALA.','4','4','2021-06-25 00:00:00','2021-04-25 00:00:00'),(21,'Cerveza Heineken Premium Quality','cerveza.jpg','Heineken para disfrutar con amigos.','4','3','2021-07-25 00:00:00','2021-04-25 00:00:00'),(22,'Coca Cola Original 1,5L','coca_cola.jpg','Coca Cola para compartir felicidad.','4','3','2021-08-25 00:00:00','2021-04-25 00:00:00'),(23,'Alfajor Terrabusi Clatico 300g','alfajor.jpg','Alfabores ricos de chocolate.','4','3','2021-09-25 00:00:00','2021-04-25 00:00:00'),(24,'Fideos Matarazzo 500g','fideos.jpg','Fideos ricos para compartir en familia. Matarazzo.','4','2','2021-10-25 00:00:00','2021-04-25 00:00:00'),(25,'Provenzal ALICANTE Ajo Y Perejil Sobre 50 Gr','provenzal.jpeg','Provenzal para condimentar tus comidas','2','1','2021-01-25 00:00:00','2021-04-25 00:00:00'),(26,'Polvo Para Bizcochuelo EXQUISITA Vainilla Caja 540 Gr','exquisita.jpeg','Cocina tu esquisita facil y rapido.','4','2','2021-02-25 00:00:00','2021-04-25 00:00:00'),(27,'Hamburguesas PATY 4 Uni X 80 Gr Clásicas','paty.jpeg','Patys para comer con amigos. La mejor hamburguesa!','4','3','2021-03-25 00:00:00','2021-04-25 00:00:00'),(28,'Medallones Vegetales Vegetaléx 4 Uni X 75 Gr Espinaca','vegeralex.jpeg','Hamburguesas veganas. Sanas y ricas.','2','3','2021-04-25 00:00:00','2021-04-25 00:00:00'),(29,'Medallones A Base De Prot Not Burger Fwp 160 Grm','notburger.jpeg','Medallones Not Burguer. Ricos y Sanos.','2','4','2021-05-25 00:00:00','2021-04-25 00:00:00'),(30,'Choclos . Granja Del Bsa 300 Grm','choclo.jpeg','Choclo para condimentar comidas.','2','4','2021-06-25 00:00:00','2021-04-25 00:00:00'),(31,'Brocoli Granja Del Bsa 400 Grm','brocoli.jpeg','Brocoli para acompañar comidas.','2','3','2021-07-25 00:00:00','2021-04-25 00:00:00'),(32,'Helado Chocolate Dobl Freddo Pot 375 Grm','freddo.jpeg','Helado Freddo para comer en casa.','4','3','2021-08-25 00:00:00','2021-04-25 00:00:00'),(33,'Cerveza Black Lager Schneider Lata 473 CC','schneider.jpeg','Cerveza Black Lager Schneider para tomar bien fria','1','3','2021-09-25 00:00:00','2021-04-25 00:00:00'),(34,'Cerveza Red Schneider Lata 473 CC','Schneider-2.jpeg','Cerveza Red Schneider Lata para disfrutar en casa.','4','2','2021-10-25 00:00:00','2021-04-25 00:00:00'),(35,'fe','default-image.png','kin','','40','2021-06-28 15:33:51','2021-06-28 15:33:51');
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
  `role` int(11) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `imgUsuario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'agostina','cervio','agos@hotmail.com','agosCervio','agos123','2001-08-26',NULL,NULL,NULL,NULL),(2,'santiago','karagozian','santi@hotmail.com','santiKaragozian','santi123','2001-08-26',NULL,NULL,NULL,NULL),(3,'matias','cagliero','mati@hotmail.com','matiCagliero','mati123','2001-08-26',NULL,NULL,NULL,NULL),(4,'ramon','diaz','ramon@hotmail.com','ramonDiaz','ramon','2001-08-26',NULL,NULL,NULL,NULL),(5,'juan','gomez','juan@hotmail.com','juanGomez','juan123','2001-08-26',NULL,NULL,NULL,NULL),(7,'delfi','gomez','delgi@hotmail.com','','hola123','2001-04-23',NULL,NULL,NULL,NULL),(8,'yanina','pavetto','yanina.pavetto@celulosaargentina.com.ar','yanina','$2a$10$4zwRv8cgDXwCxG4AJLddwuFztvNTkVK5fAhOSOJhaa7cxksy1nUVa','2021-05-06',3,NULL,NULL,NULL),(9,'delfina','boglione','delfi@gmail.com','delfina','$2a$10$hSKolBaiJuyxO3jaLXluvukRBwlML.TDva6kxwuz.AEqM7wmkktkK','2002-04-12',NULL,NULL,NULL,NULL),(21,'delfina','gomezhoikla','delfi@hotmail.com.ar','jfedkskldfs','$2a$10$7z.MWh4dSLeC9m1ETj5NbeUQ07Zw/4yvqDJsm9FR1b1jYmh7DAWy2','2021-06-01',1,NULL,NULL,NULL),(22,'juan','cervio','jbcervio@hotmail.com','juanchitooo','$2a$10$Z62.aXUzVBbuCl3.zujd3.oa7VG9sW3BRJ19fEOcLW2zfqZDLmqKK','1998-02-23',1,'2021-06-07 01:23:08','2021-06-07 01:23:08',NULL),(23,'agostina','cervio','agoscervio@hotmail.com','delfina','$2a$10$OwLnsEsIhI.ykKcAIYPYUO1uJMAVau55iJn5ratb/9paQ2k1ZnTyy','2021-06-02',1,'2021-06-07 21:01:11','2021-06-07 21:01:11',NULL),(24,'javier','cervio','jcervio@arnet.com','javier','$2a$10$f.98E2ec.Z/ZCcWJJKHIOOvLdHvhaWBrHWQKR3Qi5/EIzO1DGczUa','2021-06-01',1,'2021-06-07 21:17:15','2021-06-07 21:17:15',NULL),(25,'agostina','cervio','a@hotmail.com','agoscervio','$2a$10$aZmOAbLYl0412sRCZaJIZu19j15eU0EHOXDlIPMkWK2aaw6YmVw.2','2021-06-02',1,'2021-06-08 23:06:26','2021-06-08 23:06:26',NULL),(26,'agostina','cervio','agoscervio@icloud.com.ar','agostinaCervio','$2a$10$7nLDXpeG.QeDom9ZfJgZ5OYm2ORpduUd.5C7/dFcRFW/c6n5oDhA2','2001-08-26',1,'2021-06-10 18:07:13','2021-06-10 18:07:13',NULL),(27,'agostina','cervio','agoscervio@fskjlfkjsa.com','agostina','$2a$10$plEM1OAIUUkji4tpyDgCde/8DA6Jinktn8eL1k1kX3MhOGBsTzOjK','2001-08-26',1,'2021-06-10 18:50:31','2021-06-10 18:50:31','backgroundButterfly.jpg'),(28,'agostina','cervio','agocejkefjkfe@fsklsl.com','agostina','$2a$10$PKVdjmhshkZEkRuEyUlepu4VhLCbPQwczOocEkTDPFksmFVbXLvua','9494-05-26',1,'2021-06-10 18:51:47','2021-06-10 18:51:47','backgroundButterfly.jpg'),(29,'agostina','cervio','fkkjsd@gkfk.com','agostina','$2a$10$MNZAEtXGKDZHYnYDSuIbze.HvxV/MS2V4B5IUd1r//EgMJeyq17C2','2021-06-01',1,'2021-06-10 18:53:26','2021-06-10 18:53:26','backgroundButterfly.jpg'),(30,'agostina','cervio','lsklasla@fdkllks.com','sklk','$2a$10$g0cQ9/e7EWJkVOQeqPeoZeEnihWkMPfjUmhXjeMWL/F4CnBQoMoZ.','2021-06-06',1,'2021-06-10 18:55:30','2021-06-10 18:55:30',''),(31,'kdklsk','kfkfk','kaka@kdkd.com','kdk','$2a$10$cxxvA0bHk4Ds/6/4Qc/6HuaZYoQjEVf0uKCJaEKe8jRM3Mkw95EQq','2021-06-08',1,'2021-06-10 19:03:45','2021-06-10 19:03:45',NULL),(32,'lieke','kldfskl','kdskkd@lfl.com','kkdkd','$2a$10$CG6HJo2wUEvMyg/JsQ.FWuRpm5cXRUpJHDKy02HmcbaGX4d1AM3S.','2021-06-02',1,'2021-06-10 19:05:17','2021-06-10 19:05:17',NULL),(33,'k','k','k@k.com','lklklk','$2a$10$WJeG10NRdvxCAEm2S0aa1.b9ijwluosGZ2ph5ke4lDbM/Zdcb/wEe','2021-06-14',1,'2021-06-10 19:14:33','2021-06-10 19:14:33','user-1623352473408.jpg'),(34,'agostina','cervio','sdkkdsks@ldld.com','ksksksk','$2a$10$kQNy4NPauJgOS2We9SblCe2zA7dRUmAeMzfhaUxeXftPUC3.kT.VO','2021-06-02',1,'2021-06-10 22:16:00','2021-06-10 22:16:00','user-1623363359859.jpg'),(37,'agostin','cervio','hola@gmail.com','hola','$2a$10$oK7ni00fe9fLUV8TQ6TeEeGqwQODl30ssEPJ4y8v5TtPYGic19VXi','2021-06-10',1,NULL,NULL,'user-1623536967220.jpg');
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

-- Dump completed on 2021-06-14 15:15:16
