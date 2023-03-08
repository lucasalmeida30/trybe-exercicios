SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    pixar.movies AS m
        INNER JOIN
    box_office AS b ON m.id = b.movie_id;