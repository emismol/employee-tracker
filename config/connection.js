// get the client
const mysql = require("mysql2");
// create the connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeetracker",
});
module.exports = con;
