// get the client
import mysql from "mysql2";
// require("dotenv");
import dotenv from "dotenv";
// create the connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "employeetracker",
});
export default con;
