const { Participant } = require("../models/index");

const getAllData = async (req, res) => {
  Participant.find()
    .populate({ path: "courses", populate: { path: "instructor" } })
    .exec(function (err, data) {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      }

      res.json(data);
    });

  // const data = await Participant.find();
  // res.json(data);
};

const getDataById = async (req, res) => {
  Participant.findById(req.params.id)
    .populate({ path: "courses", populate: { path: "instructor" } })
    .exec(function (err, data) {
      if (err) {
        res.status(404);
        res.json({ error: "data not found", errorInfo: err });
      }

      res.json(data);
    });
};

const addNewData = async (req, res) => {
  const newData = new Participant(req.body);
  await newData
    .save()
    .then(() => {
      res.status(201);
      res.json({
        messege: "new Participant created",
        Participant: newData,
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
  Participant.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.status(500);
      res.json({ error: err });
    } else {
      if (data.acknowledged) {
        res.status(202);
        res.json({
          messege: "Participant data updated",
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
  Participant.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json({
        messege: `Participant with id ${req.params.id} removed`,
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
