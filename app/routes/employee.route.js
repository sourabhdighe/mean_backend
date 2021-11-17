const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const employee = require("../controllers/employee.controller");
module.exports = (app) => {
  
  app.post("/api/v1/employeeReg", employee.createEmployee);
  app.get("/api/v1/getEmployee", employee.getEmployee);
  app.delete("/api/v1/deleteEmployee/:id", employee.deleteEmployees);
};
module.exports.employee_setting = router;
