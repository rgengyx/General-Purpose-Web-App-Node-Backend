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
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat` (
  `id` varchar(255) NOT NULL,
  `senderId` varchar(255) NOT NULL,
  `receiverId` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES ('050569f3-64a7-4ed7-bf8f-ebc5a8fd5c2b','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','w','2019-12-08 20:05:57'),('08d1dc47-5c55-4293-bc9e-3e6c6779ae37','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','hi i am tom ','2019-12-08 20:58:22'),('0d7ead9c-4bd9-4a83-a802-523c43dfa15e','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','good good','2019-11-28 19:06:30'),('0ee0f007-d888-459e-9218-c27b85ea1855','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','not bad, you?','2019-11-28 16:47:37'),('1679d329-5e77-4358-b929-e6431818ef63','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','hey','2019-11-28 19:17:28'),('17396a12-8bc5-4697-9701-d63897d02e40','cc7f4c93-a6d7-4e38-9d83-505125f17629','1b98709c-9da2-48fc-8f79-edfb7dd688ac','hey tom','2019-11-29 18:42:36'),('1a1321ba-7084-4ff8-b334-846cffc8c41d','1b98709c-9da2-48fc-8f79-edfb7dd688ac','cd7cdeb0-8172-4e72-bd8b-4a0c021115d9','hey jerry this is tom\n','2019-11-29 19:12:28'),('1be58085-3354-4704-9d45-e96b040827d8','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','not bad','2019-12-08 20:07:58'),('1c4199b8-0d0f-4554-98aa-6a26c3b21746','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','hey','2019-11-28 19:13:10'),('1f4a8030-3cf1-47be-9b2e-380e65dc213e','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','sup','2019-11-28 19:08:59'),('209837b3-3a47-4d79-a278-3cc14c062395','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','this is incredible to be honest!','2019-12-08 16:42:35'),('2197d909-c66c-4304-9bd2-1dbd744c466a','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','you','2019-11-28 19:19:19'),('2d828976-ab15-4e68-9707-104f35a0604d','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','nah','2019-11-28 16:47:41'),('32792fae-7f1a-4aa3-9a21-2cf6315ade77','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','e','2019-12-08 20:05:36'),('3736768b-c554-4576-8de9-299d19594ad6','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','what','2019-11-28 19:08:47'),('3cd5a1a1-9429-4051-9a40-736f5e801220','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','what','2019-11-28 19:19:42'),('42604030-eac2-42e7-9750-318bdf166e08','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','yo','2019-11-29 09:17:21'),('459e8f0f-5224-44c5-b52b-1eb46632a267','48984bd9-b0d2-4859-b28c-4e180b06cd86','1b98709c-9da2-48fc-8f79-edfb7dd688ac','This is awesome!','2019-12-08 16:51:42'),('480673bd-cfcd-421d-b502-e5fd1564ad66','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','hey','2019-12-08 20:06:19'),('65beae8a-19fd-408f-a6d2-cb1332357639','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','what is going on?','2019-11-28 19:19:46'),('678e144d-b65b-415d-8f93-262bde1d844e','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','w','2019-12-08 20:07:12'),('68bb0ac8-0e0c-4a46-a86e-b5c004ac9e8c','4ec1bada-e252-4b4e-9df4-8392c0b932b1','1b98709c-9da2-48fc-8f79-edfb7dd688ac','hey tom how is it going?','2019-11-29 09:17:36'),('6c6a8062-9860-45e1-a892-98c1026c1309','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','hey','2019-12-08 16:55:32'),('7c8fd173-e3a7-4cf2-bfdb-f9965d8ddd78','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','what\'s wrong?','2019-11-28 16:47:54'),('7eb81227-e6a1-4519-8b15-d4682ecde2a3','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','what is going on?','2019-11-28 19:30:26'),('82279087-aa59-423d-a17f-05133709c18c','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','how is it going?','2019-11-28 19:06:07'),('8a223e00-eab9-4e59-95d3-1101d726c193','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','hi','2019-11-28 19:29:34'),('8d506057-fde5-4fd3-a696-a63d76e7f5d0','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','hey you are good!','2019-12-08 16:42:24'),('9b2ccf66-595a-4c1e-a17f-d9491a666bd3','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','hey man','2019-11-28 19:29:14'),('a06b0964-d41d-4352-9a95-601b11085ad6','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','hey','2019-11-28 19:13:13'),('a29b3082-0c21-481c-87b9-84f0e1d517bd','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','what ','2019-11-28 19:25:27'),('a5b0cc68-f01e-4220-a5d5-f8753fea74bd','cd7cdeb0-8172-4e72-bd8b-4a0c021115d9','4ec1bada-e252-4b4e-9df4-8392c0b932b1','Hey brad, this is jerry','2019-11-29 20:16:45'),('a9c8ad02-7137-4437-bee3-ac38643eac83','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','hey man ','2019-11-28 19:06:02'),('abf63bea-357d-429d-8800-a80091b43e05','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','hey','2019-12-08 20:05:30'),('bf325719-ab06-4c0a-a881-471f3aaf3e40','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','how are you?','2019-12-08 20:04:18'),('bfb0a095-9250-4df2-8918-c4909e72d5ca','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','hey ','2019-11-29 09:17:19'),('bfdd8e67-c0da-4623-93ed-f6cd65c7a57d','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','yo','2019-11-28 19:30:20'),('c61847c7-2e07-4113-a21f-b11cd0c5a2b2','1b98709c-9da2-48fc-8f79-edfb7dd688ac','4ec1bada-e252-4b4e-9df4-8392c0b932b1','Not bad tom, you?','2019-11-29 09:35:03'),('c9e41433-fe2e-486e-9b0a-7b932c49d0a0','1b98709c-9da2-48fc-8f79-edfb7dd688ac','48984bd9-b0d2-4859-b28c-4e180b06cd86','what sis t','2019-12-08 20:07:17'),('d3a89d61-560c-4509-930a-2bc6fd229e7c','cd7cdeb0-8172-4e72-bd8b-4a0c021115d9','4ec1bada-e252-4b4e-9df4-8392c0b932b1','how is it going?','2019-11-29 20:16:53'),('dbea6ac5-8662-46e5-93da-474b11bc4753','48984bd9-b0d2-4859-b28c-4e180b06cd86','1b98709c-9da2-48fc-8f79-edfb7dd688ac','how is life?','2019-12-08 20:07:48'),('e17a4dbc-e986-46d2-b39b-9b52e996ccd7','4ec1bada-e252-4b4e-9df4-8392c0b932b1','cc7f4c93-a6d7-4e38-9d83-505125f17629','yo','2019-11-28 19:26:59'),('e17d15b7-181d-4b2f-ba27-f3bda99d124c','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','yo','2019-11-28 19:17:33'),('fa05a13e-acfe-4f62-8fe6-378a72d81074','cc7f4c93-a6d7-4e38-9d83-505125f17629','4ec1bada-e252-4b4e-9df4-8392c0b932b1','what is going on brad','2019-11-28 16:47:30');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
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
