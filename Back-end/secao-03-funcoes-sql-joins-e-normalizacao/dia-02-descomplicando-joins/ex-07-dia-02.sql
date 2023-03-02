SELECT 
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    pixar.movies AS m
        INNER JOIN
    box_office AS b ON b.movie_id = m.id
    WHERE b.rating > 8 AND m.theater_id IS NOT NULL;