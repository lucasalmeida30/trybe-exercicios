USE store;

SELECT * FROM supplies WHERE item_id = 2 ORDER BY supplier_id;

SELECT item_id, price, supplier_id FROM supplies
WHERE supplier_id LIKE '%N%';

SELECT * FROM supplies WHERE price > 15 AND price < 40
ORDER BY price;