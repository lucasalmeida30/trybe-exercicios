SELECT department_id,AVG(salary), COUNT(*) AS employees FROM hr.employees
GROUP BY department_id
HAVING employees > 10;