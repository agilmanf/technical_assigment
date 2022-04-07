const express = require("express");
const sequelize = require("./database");

const Hewan = require("./models/hewanModel");

const app = express();
const port = 3000;

app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .then(() => {
    Hewan.sync().then(() => console.log("table Hewan created"));
  })
  .catch((err) => console.error("Unable to connect to the database: ", err));

app.get("/hewan", async (req, res) => {
  const hewan = await Hewan.findAll();
  res.json(hewan);
});

app.get("/hewan/:id", async (req, res) => {
  const hewan = await Hewan.findOne({ where: { id: req.params.id } });
  res.json(hewan);
});

app.post("/hewan", async (req, res) => {
  const newHewan = await Hewan.create(req.body);
  console.log(newHewan);
  res.json({
    messege: "Data berhasil ditambahkan",
    data: newHewan,
  });
});

app.delete("/hewan/:id", async (req, res) => {
  const hewan = await Hewan.destroy({ where: { id: req.params.id } });
  res.json({
    messege: "Data berhasil dihapus",
    data: hewan,
  });
});

app.put("/hewan/:id", async (req, res) => {
  const hewan = await Hewan.update(req.body, { where: { id: req.params.id } });
  res.json({
    messege: "Data berhasil diedit",
  });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
