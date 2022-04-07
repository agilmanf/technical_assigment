const mongoose = require("mongoose");

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 1,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
});

const Instructor = mongoose.model("Instructor", InstructorSchema);
module.exports = Instructor;
