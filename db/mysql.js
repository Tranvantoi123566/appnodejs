const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "test"
  });
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
  });