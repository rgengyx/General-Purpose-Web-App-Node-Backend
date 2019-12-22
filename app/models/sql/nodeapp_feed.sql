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
-- Table structure for table `feed`
--

DROP TABLE IF EXISTS `feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feed` (
  `id` varchar(255) NOT NULL,
  `title` mediumtext NOT NULL,
  `text` longtext NOT NULL,
  `userId` varchar(225) NOT NULL,
  `username` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed`
--

LOCK TABLES `feed` WRITE;
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
INSERT INTO `feed` VALUES ('242cbc87-8bee-4f67-a479-fe4314467e2c','release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','a0b819e8-3fb1-47d4-a6ff-a47a18ce1ead','123','2019-11-28 21:07:12'),('34f63a09-73d8-45ca-902c-ac704060fd3d','Many of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.','vMany of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.Many of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.Many of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.Many of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.Many of us got into data science because we fell in love with machine learning and wanted to explore the inner workings of algorithms and be creative with sophisticated math.','a0b819e8-3fb1-47d4-a6ff-a47a18ce1ead','123','2019-11-28 14:04:05'),('9f7df719-5fd9-49a1-bb70-573f9933906c','This is a new post','This is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new postThis is a new post\n','cc7f4c93-a6d7-4e38-9d83-505125f17629','ricky','2019-11-28 19:14:38'),('e9527c23-6597-4096-a6c2-ed78eae8dae0','what is this','what is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is thiswhat is this','1b98709c-9da2-48fc-8f79-edfb7dd688ac','tom','2019-12-01 16:27:36');
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;
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
