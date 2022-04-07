const express = require("express");

const app = express();
const port = 3000;

const auth = require("./auth.js");
const books = require("./books.js");

app.use(express.json());

app.use("/login", auth);
app.use("/books", books);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
