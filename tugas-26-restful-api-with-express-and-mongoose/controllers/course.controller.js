const { Course } = require("../models/index");

const getAllData = (req, res) => {
  Course.find()
    .populate("instructor")
    .exec(function (err, data) {
      if (err) return handleError(err);
      res.json(data);
    });
};

const getDataById = async (req, res) => {
  Course.findById(req.params.id)
    .populate("instructor")
    .exec(function (err, data) {
      if (err) {
        res.status(404);
        res.json({ error: "data not found", errorInfo: err });
      }
      res.json(data);
    });
};

const addNewData = async (req, res) => {
  const newData = new Course(req.body);
  await newData
    .save()
    .then(() => {
      res.status(201);
      res.json({
        messege: "new Course created",
        Course: newData,
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
  Course.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.status(500);
      res.json({ error: err });
    } else {
      if (data.acknowledged) {
        res.status(202);
        res.json({
          messege: "Course data updated",
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
  Course.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json({
        messege: `Course with id ${req.params.id} removed`,
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
