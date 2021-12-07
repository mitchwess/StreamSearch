/*
add data to all the tables
*/

SET GLOBAL local_infile = 'ON';

LOAD DATA LOCAL INFILE './database/datasets/netflix_titles.csv' INTO TABLE Stream.netflix FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './database/datasets/hulu_titles.csv' INTO TABLE Stream.hulu FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './database/datasets/amazon_prime_titles.csv' INTO TABLE Stream.prime FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE './database/datasets/disney_plus_titles.csv' INTO TABLE Stream.disney FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;




