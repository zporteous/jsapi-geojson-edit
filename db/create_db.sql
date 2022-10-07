CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table poi ( 
    poi_id serial primary key,
    poi_name text,
    poi_type text constraint  poi_types check(poi_type in ('Mountain','Hike','River', 'Waterfall',
                                                            'Meadow','Lake', 'Fishing', 'Camping')),
    add_date timestamp default now(),
    update_date timestamp,
    description text,
    num_comments integer default 0,
    geom Geometry(Point,4326)
);

create table comments ( 
    comment_id uuid default uuid_generate_v4 (),
    poi_id serial references poi on update cascade on delete cascade,
    commenter text,
    comment_date timestamptz default now(),
    comment text,
    importance varchar constraint  importance_types check(importance in ('High','Medium','Low'))
);

DROP TRIGGER if exists comment_count ON comments;
CREATE OR REPLACE FUNCTION comment_count() RETURNS TRIGGER AS $comment_count$
    BEGIN
        IF (TG_OP = 'DELETE') THEN
            update poi set  num_comments = num_comments - 1 where poi_id = new.poi_id;
        ELSIF (TG_OP = 'INSERT') THEN
            update poi set  num_comments = num_comments + 1 where poi_id = new.poi_id;
        END IF;
        RETURN NULL; 
    END;
$comment_count$ LANGUAGE plpgsql;

CREATE TRIGGER comment_count
AFTER INSERT OR DELETE ON comments
    FOR EACH ROW EXECUTE FUNCTION comment_count();

-- DELETE b FROM BLOB b 
--   LEFT JOIN FILES f ON f.id = b.fileid 
--       WHERE f.id IS NULL

insert into poi (poi_name, poi_type, description, geom) values 
('Mt. Ellinor','Mountain', 'I am sample location 1!!', 'POINT(-123.26177747370306 47.52181740389976)'),
('Dosewallips River', 'River', 'I am sample location 2!!', 'POINT(-123.05475035903785 47.7399822021308)'),
('Mt Jupiter','Mountain', 'I am sample location 3!!', 'POINT(-123.06889177537252 47.70516883980035)'),
('Mt. Ellinor Trail','Hike', '', 'POINT(-123.23203681316065 47.50812526567346)'),
('Hamma Hamma Falls', 'Waterfall', '', 'POINT(-123.26050742297579 47.57757981506096)'),
('Lake Quinault','Lake', '', 'POINT(-123.86478258252205 47.47772484150392)'),
('Mt. Ellinor','Mountain', '', 'POINT(-123.26177747370306 47.52181740389976)'),
('Hoh River Camping', 'Camping', '', 'POINT(-123.87955861667703 47.78804802874668)'),
('Hoh Valley Meadow','Meadow', '', 'POINT(-123.97559179095599 47.831967754377274)'),
('Fishing at Lake Cushman','Fishing', 'I am sample location 1!!', 'POINT(-123.30299450410934 47.484313612144625)'),
('Mt. Olympus', 'Mountain', '', 'POINT(-123.71585273325529 47.80501855473156)'),
('Mt. Lawson','Mountain', '', 'POINT(-123.58849763642282 47.65865855835319)');


insert into comments (poi_id, commenter, comment, importance) values 
(1,'Zach', 'I am sample comment 1!!', 'High'),
(2, 'Zach', 'I am sample comment 2!!', 'High'),
(2, 'Zach', 'I am sample comment 3!!', 'Low'),
(3, 'Zach', 'I am sample comment 4!!', 'Medium'),
(3, 'Zach', 'I am sample comment 5!!', 'Low'),
(3, 'Zach', 'I am sample comment 6!!', 'High'),
(3, 'Zach', 'I am sample comment 7!!', 'Low');