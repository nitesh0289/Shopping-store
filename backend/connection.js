const mysql = require("mysql");

console.log("Connecting Database...");

var db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "immortal_shopping",
  password: "wecan'tmakeperfect",
  database: "immortal_shopping",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected Successfully!!");
});

module.exports = db;
