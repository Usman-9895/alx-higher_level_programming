-- Crée une table force_name dans la base de données courante,
-- ne faites rien si la table force_name existe déjà.

CREATE TABLE IF NOT EXISTS `force_name` (
	`id` INT,
	`name` VARCHAR(256) NOT NULL
);
