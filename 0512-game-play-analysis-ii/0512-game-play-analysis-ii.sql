# Write your MySQL query statement below
-- select a1.player_id, a1.device_id
-- from Activity a1
-- where (a1.player_id, a1.event_date) in (
--     select a2.player_id, MIN(a2.event_date)
--     from Activity a2
--     group by a2.player_id
-- )



WITH min_data AS (
    select a.player_id, MIN(a.event_date) event_date
    from Activity a
    group by a.player_id
)
select a1.player_id, a1.device_id
from Activity a1
inner join min_data m on m.player_id = a1.player_id
and m.event_date = a1.event_date;

