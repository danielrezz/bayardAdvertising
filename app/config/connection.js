var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b3dedd81368b4b",
  password: "0f727651",
  database: "heroku_37b6e5b44e82a8e",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
