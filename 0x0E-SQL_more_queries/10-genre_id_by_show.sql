-- Répertorie toutes les émissions de hbtn_0d_tvshows qui ont au moins un genre lié.

    SELECT s.title, g.genre_id
      FROM tv_shows s
INNER JOIN tv_show_genres g
        ON s.id = g.show_id
  ORDER BY s.title, g.genre_id ASC;
