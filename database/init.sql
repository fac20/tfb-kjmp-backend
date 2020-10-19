BEGIN;

DROP TABLE IF EXISTS countries, things_to_do, businesses, experiences  CASCADE;

CREATE TABLE countries (
 id SERIAL PRIMARY KEY,
country_name VARCHAR(255) NOT NULL,
);

CREATE TABLE things_to_do (
 country_id INTEGER REFERENCES countries(id),
 name VARCHAR(255) NOT NULL, 
 details TEXT,
--  time INTEGER ???
-- date ???
location TEXT

);
CREATE TABLE businesses (
country_id INTEGER REFERENCES countries(id),
 name VARCHAR(255) NOT NULL, 
 details TEXT,
--  time INTEGER ???
-- date ???
location TEXT
-- ownership array ??
);

CREATE TABLE experiences (
 country_id INTEGER REFERENCES countries(id),
 socials TEXT,
 details TEXT,
--  tags array ??
overall_experience TEXT,
);

INSERT INTO countries (country_name) VALUES 
(argentina),
(brazil),


COMMIT;