const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Attendance = new Schema({
  /**
   * @dev {employee_attendance} architecture
   * employee_attendance: {
   *    "17 Nov, 2021": {
   *        {
   *            _id: employee_id,
   *            entry_time: Date,
   *            exit_time: Date,
   *            status: Present/Absent => String
   *        },
   *        ... => Same as above object
   *    },
   *    "18 Nov, 2021": {...}
   * }
   */
  employee_attendance: Object,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: Date,
});

module.exports = mongoose.model("employee_attendance", Attendance);
