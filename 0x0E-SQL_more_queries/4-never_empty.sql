-- Crée une table id_not_null dans la base de données courante,
-- ne rien faire si la table id_not_null existe déjà.

CREATE TABLE IF NOT EXISTS `id_not_null` (
	`id` INT NOT NULL DEFAULT 1,
	`name` VARCHAR(256)
);
