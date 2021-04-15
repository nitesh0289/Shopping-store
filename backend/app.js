const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const mysqlAdmin = require("node-mysql-admin");
const cors = require("cors");

const app = express();

app.use(mysqlAdmin(app));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is backend");
});

let usersRoute = require("./routes/users.js");

app.use("/", usersRoute);

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});
