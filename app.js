const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const data = require("./data.json");
const port = 5000;
const app = express();
const SECRET = "RAHASIA BOSS";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  const user = data[username];
  if (user == undefined) {
    return res.status(401).send("invalid user");
  }
  if (user.password !== password) {
    return res.status(401).send("invalid password");
  }

  const {id} = user;
  jwt.sign(
    {
      id,
      username,
    },
    SECRET,
    (err, token) => {
      res.send(token);
    }
  );
});

app.get(
  "/data",
  (req, res, next) => {
    jwt.verify(req.headers.authorization, SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send("unauthorized");
      }
      req.user = decoded;
      next();
    });
  },
  (req, res) => {
    res.json(req.user);
  }
);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
