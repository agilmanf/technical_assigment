const express = require("express");
const app = express();
const port = 3000;

const sessions = require("express-session");
const cookieParser = require("cookie-parser");

app.use(
  sessions({
    secret: "rahasia",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Dummy Data ////////////////
const myusername = "user1";
const mypassword = "mypassword";

let session;

app.get("/", (req, res) => {
  session = req.session;

  if (session.nama) {
    res.send("anda sudah login <a href='/logout'>logout</a>");
  } else {
    res.sendFile("./views/index.html", { root: __dirname });
  }
});

app.post("/user", (req, res) => {
  if (req.body.username === myusername && req.body.password === mypassword) {
    session = req.session;
    session.nama = req.body.username;

    res.send(
      `Anda Berhasil Login <a href=\'/logout'>logout</a> | <a href='/'>kembali</a>`
    );
  } else {
    res.send(
      "username / password yang anda masukan salah, <a href='/'>klik untuk kembali</a>"
    );
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(__dirname);
  console.log("Server is Running on Port " + port);
});
