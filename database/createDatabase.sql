/* 
Create the stream search database with all appropriate tables
*/

DROP DATABASE IF EXISTS Stream;
CREATE DATABASE IF NOT EXISTS Stream;
USE Stream;

DROP TABLE IF EXISTS netflix;
DROP TABLE IF EXISTS hulu;
DROP TABLE IF EXISTS prime;
DROP TABLE IF EXISTS disney;

CREATE TABLE netflix(
show_id TEXT,
show_type TEXT,
title TEXT,
director TEXT,
show_cast TEXT,
country TEXT,
date_added TEXT,
release_year INT,
rating TEXT,
duration TEXT,
listed_in TEXT,
show_description TEXT
);

CREATE TABLE hulu(
show_id TEXT,
show_type TEXT,
title TEXT,
director TEXT,
show_cast TEXT,
country TEXT,
date_added TEXT,
release_year INT,
rating TEXT,
duration TEXT,
listed_in TEXT,
show_description TEXT
);

CREATE TABLE prime(
show_id TEXT,
show_type TEXT,
title TEXT,
director TEXT,
show_cast TEXT,
country TEXT,
date_added TEXT,
release_year INT,
rating TEXT,
duration TEXT,
listed_in TEXT,
show_description TEXT
);

CREATE TABLE disney(
show_id TEXT,
show_type TEXT,
title TEXT,
director TEXT,
show_cast TEXT,
country TEXT,
date_added TEXT,
release_year INT,
rating TEXT,
duration TEXT,
listed_in TEXT,
show_description TEXT
);

