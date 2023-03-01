SELECT * FROM hr.employees;

SELECT COUNT(*) AS 'total', job_id FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';