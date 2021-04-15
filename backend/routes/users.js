const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "Immortal_shopping";
const app = express();
const router = express.Router();
const mysql = require("mysql");
const mysqlConnection = require("../connection");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
module.exports = router;

router.post("/signup", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashed) => {
      password = hashed;
      let value = [[name, email, password]];
      let sql = "INSERT INTO users (name,email, password) VALUES ?";
      mysqlConnection.query(sql, [value], (err, result) => {
        if (err) {
          res.status(202).json(err);
        } else {
          res.status(200).json("user created");
        }
      });
    });
  });
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = "SELECT * FROM users WHERE email =" + mysql.escape(email);
  mysqlConnection.query(sql, (err, result) => {
    console.log(result);
    if (result.length == 0) {
      res.status(404).send({ error: "user not exist" });
    } else if (err) {
      res.status(500).send({ error: "Error in fetching a user data" });
    } else {
      bcrypt.compare(password, result[0].password, (err, isMatch) => {
        if (err) console.log(err);
        if (isMatch) {
          let Access_token = jwt.sign({ id: result[0].id }, secret, {
            expiresIn: "1h",
          });
          let Session_token = jwt.sign({ id: Access_token }, secret);
          res
            .header("auth-token", Session_token)
            .send({ result, Session_token });
        } else {
          return res.sendStatus(401);
        }
      });
    }
  });
});

module.exports = router;
