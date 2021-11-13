const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Attendance = new Schema({
  employee: {
    _id: ObjectId,
    entryTime: String,
    exitTime: String
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
});

module.exports = mongoose.model("employee_attendance", Attendance);
