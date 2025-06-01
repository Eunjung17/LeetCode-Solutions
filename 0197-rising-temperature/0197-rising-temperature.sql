# Write your MySQL query statement below

/*
Using LAG() function
*/

WITH preWeather AS(
    SELECT id, recordDate, temperature, 
            LAG(recordDate, 1) OVER(ORDER BY recordDate) as prevDate,
            LAG(temperature, 1) OVER(ORDER BY recordDate) as prevTemperature
    FROM Weather
)

SELECT id
FROM preWeather
WHERE temperature  > prevTemperature 
AND recordDate = DATE_ADD(prevDate, INTERVAL 1 DAY);