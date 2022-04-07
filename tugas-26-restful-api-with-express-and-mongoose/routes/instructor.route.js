const express = require("express");
const router = express.Router();

const {
  getAllData,
  getDataById,
  addNewData,
  editData,
  deleteData,
} = require("../controllers/instructor.controller");

router.get("/", getAllData);
router.get("/:id", getDataById);

router.post("/", addNewData);
router.patch("/:id", editData);
router.delete("/:id", deleteData);

module.exports = router;
