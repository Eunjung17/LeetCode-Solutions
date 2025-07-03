# Write your MySQL query statement below
-- select a1.player_id, a1.device_id
-- from Activity a1
-- where (a1.player_id, a1.event_date) in (
--     select a2.player_id, MIN(a2.event_date)
--     from Activity a2
--     group by a2.player_id
-- )

WITH
  min_data AS (
    SELECT
      A.player_id,
      MIN(A.event_date) AS event_date
    FROM
      Activity A
    GROUP BY
      A.player_id
  )
SELECT
  A2.player_id,
  A2.device_id
FROM
  Activity A2
  INNER JOIN min_data M ON M.player_id = A2.player_id
  AND M.event_date = A2.event_date;