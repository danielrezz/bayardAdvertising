DROP DATABASE IF EXISTS bayard;

CREATE DATABASE bayard;

USE bayard;

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `phone` VARCHAR( 255 ) NOT NULL,
  `industry` VARCHAR( 255 ) NOT NULL,

  PRIMARY KEY ( `id` ) 
);