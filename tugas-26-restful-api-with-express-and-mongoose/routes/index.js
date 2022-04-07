const express = require("express");
const router = express.Router();

const instructorRouter = require("./instructor.route");
const courseRouter = require("./course.route");
const participantRouter = require("./participant.route");

router.get("/", (req, res) => {
  res.json("ini dari server");
});

router.use("/instructors", instructorRouter);
router.use("/courses", courseRouter);
router.use("/participants", participantRouter);

router.use("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
