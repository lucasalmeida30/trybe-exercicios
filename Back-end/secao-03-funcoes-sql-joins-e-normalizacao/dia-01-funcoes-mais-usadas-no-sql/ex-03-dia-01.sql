SELECT job_id, AVG(salary) AS 'salario_medio' FROM hr.employees
GROUP BY job_id
ORDER BY salario_medio DESC;