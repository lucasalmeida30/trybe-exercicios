USE pixar;

DELETE FROM box_office
WHERE movie_id IN (2,9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';