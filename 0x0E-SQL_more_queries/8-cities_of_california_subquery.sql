-- Liste toutes les villes de Californie trouvées dans la base de données hbtn_0d_usa.

  SELECT id, name
    FROM cities
   WHERE state_id IN (SELECT id FROM states WHERE name = "California")
ORDER BY id ASC;
