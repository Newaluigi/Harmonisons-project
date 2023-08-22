-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema harmnisons
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `harmnisons` DEFAULT CHARACTER SET utf8mb3 ;
USE `harmnisons` ;

-- -----------------------------------------------------
-- Table `harmnisons`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `harmnisons`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dateArticle` DATE NULL DEFAULT NULL,
  `titleArticle` VARCHAR(100) NULL DEFAULT NULL,
  `textArticle` MEDIUMTEXT NULL DEFAULT NULL,
  `urlImg` VARCHAR(255) NULL DEFAULT NULL,
  `archived` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),)
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8mb3;

INSERT INTO `articles` VALUES (27,'2023-05-03','test article archivé','<p><br></p>','',1),(28,'2023-05-18','new test archived 16/06','','',1),(40,'2023-06-15','Article 16/06/23','<p>Article test 16/06/23</p>','http://localhost:5000/uploads/images/L-1.png',0),(42,'2023-06-15','blabla 4','<p>blabla</p>','',1);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;