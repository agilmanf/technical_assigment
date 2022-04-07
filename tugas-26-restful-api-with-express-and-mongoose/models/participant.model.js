const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 1,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  email: {
    type: String,
    maxlength: 50,
  },
  phone: {
    type: String,
    maxlength: 13,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Participant = mongoose.model("Participant", ParticipantSchema);
module.exports = Participant;
