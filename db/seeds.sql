DROP DATABASE IF EXISTS connect_play;
CREATE DATABASE connect_play;
USE connect_play;
SET SQL_SAFE_UPDATES = 0;


CREATE TABLE tbl_player
(
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(80) NOT NULL,
    LastName varchar(80) NOT NULL,
     Email VARCHAR(255) NOT NULL,
    UserName varchar(100) NOT NULL,
	UserPassword varchar(40) NOT NULL,
     LogIn TIMESTAMP,
    LogOut TIMESTAMP,
    IsActive BOOLEAN DEFAULT true,
    Address VARCHAR(255) NOT NULL,
    Address2 VARCHAR(255) ,
    CityName VARCHAR(255) NOT NULL,
    ZipCode int NOT NULL,
    State VARCHAR(100) NOT NULL,
    latitude float8,
    longitude float8,
    PRIMARY KEY (ID)
    );
    
INSERT INTO tbl_player (FirstName, LastName, Email, UserName, UserPassword, Address, CityName, ZipCode, State,latitude, longitude) VALUES ('Russell','Dyer','russell@mysqlresources.com','RussellDyer','Test','1578  Hewes Avenue', 'Baltimore', 21202, 'Maryland',39.290440,-76.612328);
INSERT INTO tbl_player (FirstName, LastName, Email, UserName,UserPassword, Address, CityName, ZipCode, State,latitude, longitude) VALUES ('Richard','Stringer','richard@mysqlresources.com','RichardStringer','Test','3966  Werninger Street', 'Sugar Land', 77478, 'Texas',29.597080,-95.620972);
INSERT INTO tbl_player (FirstName, LastName, Email, UserName, UserPassword, Address, CityName, ZipCode, State,latitude, longitude) VALUES ('Rusty','Osborne','rusty@mysqlresources.com','RustyOsborne','Test','1078  Philadelphia Avenue', 'Salt Lake City', 84107, 'Utah',40.760780,-111.891045);
INSERT INTO tbl_player (FirstName, LastName, Email, UserName, UserPassword, Address, CityName, ZipCode, State,latitude, longitude) VALUES ('Lexi', 'Hollar', 'alexandra@mysqlresources.com', 'LexiHollar', 'Test','1446  Philli Lane', 'Stuart', 74570, 'Oklahoma',27.199570,-80.254883);