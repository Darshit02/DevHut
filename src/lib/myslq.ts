const mysql = require("mysql2");

// Configure MySQL connection
export const pool = mysql.createPool({
  host: process.env.AUTH_DATABASE_HOST, // Your MySQL host
  user: process.env.AUTH_DATABASE_USER, // MySQL username
  password: process.env.AUTH_DATABASE_PASSWORD, // MySQL password
  database: process.env.AUTH_DATABASE_NAME, // MySQL database name
});
