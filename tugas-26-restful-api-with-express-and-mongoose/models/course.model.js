const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 1,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 1,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
  },
  scheduleDateTime: {
    type: Date,
  },
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
