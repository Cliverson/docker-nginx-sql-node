GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root';
CREATE DATABASE IF NOT EXISTS dbnode;
USE dbnode;
CREATE TABLE IF NOT EXISTS tbnome (
    id int(5) NOT NULL auto_increment, 
    name  varchar(100) NOT NULL default '',
    PRIMARY KEY  (id)
);