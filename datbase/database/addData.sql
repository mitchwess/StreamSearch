/*
add data to all the tables
*/

SET GLOBAL local_infile = 'ON';

LOAD DATA LOCAL INFILE './datbase/datasets/netflix_titles.csv' INTO TABLE Stream.netflix FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './datbase/datasets/hulu_titles.csv' INTO TABLE Stream.hulu FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './datbase/datasets/amazon_prime_titles.csv' INTO TABLE Stream.prime FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './datbase/datasets/disney_plus_titles.csv' INTO TABLE Stream.disney FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

