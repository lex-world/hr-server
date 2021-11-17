const { updateOne } = require("../models/Attendance");
const Attendance = require("../models/Attendance");

module.exports = {
  setAttendance: async (req, res) => {
    const { _id, entryTime, exitTime, type } = req.body;

    try {
      /** @dev check if user already logged in on the same day */
      console.log(_id);
      // const d = new Date();
      // const dString = d.toString();

      // let employee_attendance = {};
      // /** @dev since obj key could not be variable this method is used */
      // employee_attendance[Date.now()] = {
      //   _id,
      //   entry_time: "",
      //   exit_time: "",
      //   status: "Absent",
      // };

      // await Attendance.create({
      //   employee_attendance,
      // });

      const getAttendance = await Attendance.find();
      console.log(getAttendance)
      switch (type) {
        case "entry":

        case "exit":

        default:
          return;
      }

      res.status(200).json({
        msg: "Attendance Done!"
      })
    } catch (error) {
      console.log(error);
    }
  },
};
