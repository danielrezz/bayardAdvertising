var connection = require("../config/connection");

module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    var dbQuery = "SELECT * FROM users";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/api/new", function (req, res) {
    console.log("User Data:");
    console.log(req.body);

    var dbQuery =
      "INSERT INTO users (name, email, phone, industry) VALUES (?,?,?,?)";

    connection.query(
      dbQuery,
      [req.body.name, req.body.email, req.body.phone, req.body.industry],
      function (err, result) {
        if (err) throw err;
        console.log("User Successfully Saved!");
        res.end();
      }
    );
  });
};
