const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Employee = new Schema({
  _id: ObjectId,
  full_name: String,
  dob: Date,
  contact_number: Number,
  joined_at: Date,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
});

module.exports = mongoose.model('employee', Employee);