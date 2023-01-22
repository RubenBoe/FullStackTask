import mysql from 'mysql2';

// create the connection to database
export const getConnection = () => mysql.createConnection({
  host: process.env.databasehost,
  user: process.env.databaseuser,
  database: 'task_fs',
  password: process.env.databasepassword,
  port: parseInt(process.env.databaseport || "0")
});