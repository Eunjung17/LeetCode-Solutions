CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
    SELECT MAX(salary)
    FROM (
        SELECT salary, 
                DENSE_RANK() OVER (ORDER BY salary DESC) rnk
        FROM Employee

    ) AS subquery
    WHERE rnk = N
    LIMIT 1
  );
END