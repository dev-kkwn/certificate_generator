const mongoose = require("mongoose");
const { v4 } = require("uuid");

const studentSchema = mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("studentData",studentSchema);


module.exports = {
    Student,
}