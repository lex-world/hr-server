const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const EmployeesModal = require("../models/EmployeesModal");

module.exports = {
  newEmployee: async (req, res) => {
    const _id = new mongoose.Types.ObjectId();
    const { fullName, dob, contactNumber, joinedAt, descriptors } = req.body;

    try {
      await Employee.create({
        _id,
        full_name: fullName,
        dob,
        contact_number: contactNumber,
        joined_at: joinedAt,
      });

      // @dev clean array i.e. [{0: data},...] format to [data]
      const formattedArray = Object.values(descriptors);

      await EmployeesModal.create({
        name: fullName,
        descriptors: [formattedArray],
        _id,
      });

      res.status(200).json({ msg: "Completed" });
    } catch (error) {
      console.log(error);
    }
  },
  getAllEmployeeDescriptors: async (req, res) => {
    try {
      const allDescriptors = await EmployeesModal.find();
      res.send(allDescriptors.reduce((a, v) => ({ ...a, [v.name]: v }), {}));
    } catch (error) {
      console.log(error);
    }
  },
};
