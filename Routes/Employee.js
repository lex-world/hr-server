const express = require("express");
const EmployeeRouter = express.Router();
const { newEmployee, getAllEmployeeDescriptors } = require("../Controllers/Employee");

EmployeeRouter.post("/new-employee", newEmployee).get("/get-all-employee", getAllEmployeeDescriptors);

module.exports = EmployeeRouter;
