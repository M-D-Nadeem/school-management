import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config()
const connection=mysql.createConnection({
  host: process.env.MYSQLHOST,    
  user: process.env.MYSQLUSER,     
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,  
})

connection.connect((err)=>{
    if (err) {
        console.error('Error connecting to the database:', err);
      } else {
        console.log('Connected to the MySQL database');
      }
})

export default connection;