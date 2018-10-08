CREATE DATABASE mydb;

CREATE TABLE mytable (
	ID 		INT PRIMARY KEY NOT NULL,
	NAME 	TEXT 					  NOT NULL,
	ADDRESS CHAR(50) 			NOT NULL
);

INSERT INTO mytable (ID, NAME, ADDRESS) 
VALUES 
(1, 'joe', 	'street 1'),
(2, 'judy', 'street nr 2');