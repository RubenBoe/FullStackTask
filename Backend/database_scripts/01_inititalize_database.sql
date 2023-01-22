CREATE DATABASE IF NOT EXISTS task_fs;

use task_fs;

CREATE TABLE IF NOT EXISTS instancetable (
	InstanceID int auto_increment PRIMARY KEY,
	oID nvarchar(100),
    instanceTimestamp bigint,
	PersonID int,
    PositionX decimal(5, 3),
    PositionY decimal(5, 3),
    UNIQUE KEY(instanceTimestamp, PersonID)
);
