SELECT * FROM store.suppliers
WHERE name LIKE '%LTDA' ORDER BY name DESC;

SELECT COUNT(name) FROM store.suppliers WHERE name LIKE '%f%';