-- Répertorie toutes les émissions et tous les genres liés à cette émission à partir de hbtn_0d_tvshows.

   SELECT s.title, g.name
     FROM (tv_shows s LEFT JOIN tv_show_genres sg ON s.id = sg.show_id)
LEFT JOIN tv_genres g ON sg.genre_id = g.id
 ORDER BY s.title, g.name ASC;
