const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EmployeeAuth = new Schema({
  name: String,
  descriptors: Array,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
  _id: ObjectId,
});

module.exports = mongoose.model("employee_auth_modals", EmployeeAuth);
