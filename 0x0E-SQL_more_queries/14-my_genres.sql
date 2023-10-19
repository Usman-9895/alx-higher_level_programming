-- Utilise la base de données hbtn_0d_tvshows pour répertorier tous les genres de l'émission Dexter.

  SELECT g.name
    FROM (tv_shows s JOIN tv_show_genres sg ON s.id = sg.show_id)
    JOIN tv_genres g ON sg.genre_id = g.id
   WHERE s.title = "Dexter"
ORDER BY g.name ASC;
