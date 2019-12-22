-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: nodeapp
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0904f456-f81e-4f3c-9714-2170ba3e7400','leo@gmail.com','leo','$2b$10$IXfIwGWTv0oZsv9ZtxOvBO4kzzlURdgz4V.2NA4cQvrc4XnGjX8eC'),('1b98709c-9da2-48fc-8f79-edfb7dd688ac','tom@gmail.com','tom','$2b$10$eG8/B7WX3FOBNehx9yXKhOzUK1QibVQDvgaL60TFP3a5nBcUxo2JO'),('48984bd9-b0d2-4859-b28c-4e180b06cd86','dean@gmail.com','dean','$2b$10$39dvlJiuP2JmrE6vdrmFwO7B9KJyZSXJx6uF/XSnTen4/1Vt7Bame'),('4ec1bada-e252-4b4e-9df4-8392c0b932b1','brad@gmail.com','brad','$2b$10$3olNj4AlvnuUWrEhfnUJ1ugDAuyljWolA6kZNPOzYUE3XGF3aaxeS'),('90cebbf1-db37-44a3-bce8-22edab5eb24e','paul@gmail.com','paul','$2b$10$.mSjmlfa2YdtdF3CoKrCu.961ounvs77wDMMiTm/gdPHVF3os3tZK'),('cc7f4c93-a6d7-4e38-9d83-505125f17629','ricky@gmail.com','ricky','$2b$10$qNgmg1RuSmO3CoVsI8FhfuE9j/MsjWLxgGchBwOXA5iAcpTGJKkKq'),('cd7cdeb0-8172-4e72-bd8b-4a0c021115d9','jerry@gmail.com','jerry','$2b$10$NSmFheX5aqGgZq0NNg0L3.q8..xzOM0AokKSrVzQMuruwY8yhjEYm'),('e0345dce-ea7c-4abb-a606-47ada13fda45','amy@gmail.com','amy','$2b$10$Dr0iMO.DqEASYKnNczZMq.MKjsY1s7S/Y7RS/b5DmH4Ag8979Pk2C');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-22 19:04:14
