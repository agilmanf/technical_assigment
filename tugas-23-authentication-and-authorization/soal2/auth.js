const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = [
  {
    username: "terra",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "dave",
    password: "password123member",
    role: "member",
  },
];

const accessTokenSecret = "youraccesstokensecret";

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    );
    res.json({ accessToken });
  } else {
    res.status(400);
    res.json({ error: "username or password incorrect" });
  }
});

module.exports = router;
