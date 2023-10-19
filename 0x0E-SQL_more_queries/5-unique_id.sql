-- Crée une table unique_id dans la base de données actuelle,
-- ne faites rien si la table unique_id existe déjà.

CREATE TABLE IF NOT EXISTS `unique_id` (
	`id` INT NOT NULL DEFAULT 1 UNIQUE,
	`name` VARCHAR(256)
);
