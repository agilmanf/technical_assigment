const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const books = [
  {
    author: "Robert Martin",
    country: "USA",
    language: "English",
    pages: 209,
    title: "Clean Code",
    year: 2008,
  },
  {
    author: "Dave Thomas & Andy Hunt",
    country: "USA",
    language: "English",
    pages: 784,
    title: "The Pragmatic Programmer",
    year: 1999,
  },
  {
    author: "Kathy Sierra, Bert Bates",
    country: "USA",
    language: "English",
    pages: 928,
    title: "Head First Java",
    year: 2003,
  },
];

const accessTokenSecret = "youraccesstokensecret";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (error, user) => {
      if (error) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

router.get("/", authenticateJWT, (req, res) => {
  res.json(books);
});

router.post("/", authenticateJWT, (req, res) => {
  console.log(req.user);
  console.log(req.body);
  if (req.user.role === "admin") {
    books.push(req.body);
    res.json({
      messege: "book added successfully",
      data: req.body,
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
