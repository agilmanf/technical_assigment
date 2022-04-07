const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

const dbName = "technicalAssigment";
const uri = `mongodb+srv://skilvul:skilvul123@cluster0.cydfw.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Database Connect
mongoose
  .connect(uri)
  .then(() => console.log("Berhasil Connect ke MongoDB Atlas"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

//Middleware
app.use(express.json());
app.use(router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
