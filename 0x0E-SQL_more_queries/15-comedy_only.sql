-- Utilise la base de données hbtn_0d_tvshows pour répertorier toutes les émissions de comédie.

  SELECT s.title
    FROM (tv_genres g JOIN tv_show_genres sg ON g.id = sg.genre_id)
    JOIN tv_shows s ON sg.show_id = s.id
   WHERE g.name = "Comedy"
ORDER BY s.title ASC;
