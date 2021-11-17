const express = require("express");
const EmployeeRouter = express.Router();

const {
    newEmployee,
    getAllEmployeeDescriptors,
} = require("../Controllers/Employee");
const { setAttendance } = require("../Controllers/Attendance");

EmployeeRouter.post("/new-employee", newEmployee)
  .get("/get-all-employee", getAllEmployeeDescriptors)
  .post("/employee-attendace", setAttendance);

module.exports = EmployeeRouter;
