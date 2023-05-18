CREATE DATABASE `crud_alunos`;

USE `crud_alunos`;

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(50) NOT NULL,
  `neighborhood` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `number` int(11) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `complement` varchar(50) DEFAULT NULL,
  `state` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);