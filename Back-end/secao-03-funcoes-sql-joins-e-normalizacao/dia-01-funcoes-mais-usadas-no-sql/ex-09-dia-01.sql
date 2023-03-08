SELECT AVG(salary), job_id FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY salary DESC;