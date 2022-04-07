const { Instructor } = require("../models/index");

const getAllData = async (req, res) => {
  const data = await Instructor.find();
  res.json(data);
};

const getDataById = async (req, res) => {
  Instructor.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.json({ error: "data not found", errorInfo: err });
    });
};

const addNewData = async (req, res) => {
  const newData = new Instructor(req.body);
  await newData
    .save()
    .then(() => {
      res.status(201);
      res.json({
        messege: "new instructor created",
        instructor: newData,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400);
      res.json({
        messege: "data invalid",
        error: error.errors,
      });
    });
};

const editData = (req, res) => {
  Instructor.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.status(500);
      res.json({ error: err });
    } else {
      if (data.acknowledged) {
        res.status(202);
        res.json({
          messege: "instructor data updated",
        });
      } else {
        res.status(400);
        res.json({
          messege: "data invalid",
        });
      }
    }
  });
};

const deleteData = async (req, res) => {
  Instructor.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json({
        messege: `instructor with id ${req.params.id} removed`,
        info: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.json({ error: "data not found" });
    });
};

module.exports = {
  getAllData,
  getDataById,
  addNewData,
  editData,
  deleteData,
};
