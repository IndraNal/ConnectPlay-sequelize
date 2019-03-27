DROP DATABASE IF EXISTS connect_play;
CREATE DATABASE connect_play;
USE connect_play;



CREATE TABLE tbl_player
(
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(80) NOT NULL,
    LastName varchar(80) NOT NULL,
     Email VARCHAR(255) NOT NULL,
    UserName varchar(100) NOT NULL,
	UserPassword varchar(40) NOT NULL,
   Address_ID  int,
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
    