-- Répertorie tous les enregistrements avec un score >= 10 du
-- table second_table de la base de données actuelle.
-- Le résultat doit afficher à la fois le score et le nom, classés par score.

SELECT `score`, `name` FROM `second_table` WHERE `score` >= 10 ORDER BY `score` DESC;
