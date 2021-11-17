var MongoClient = require("mongodb").MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Employee } = require("../models/employee.model");
const jwt = require("jsonwebtoken");

exports.createEmployee = async (req, res) => {
  console.log("check Employee data", req.body);
  const addEmployee = new Employee({
    email: req.body.email,
    password: req.body.password,
    designation: req.body.designation,
  });
  addEmployee
    .save()
    .then((data) => {
      res.status(200).json({
        status: true,
        data: data,
      });
    })
    .catch((error) => {
      // console.log(error)
      res.status(400).json({
        status: "error",
        error: error.message || error,
      });
    });
};

exports.getEmployee = async (req, res) => {
  try {
    // const qb = utils.queryBuilder(req.query);
    // const { filter, skip, limit, sort, projection, population } = qb;
    Employee.find().then((user) => {
      return res.status(200).json({
        success: "success",
        message: "Record fetch",
        data: user,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteEmployees = async (req, res) => {
  console.log("Delete api Hits at 48")
  try {
    // const qb = utils.queryBuilder(req.query);
    // const { filter, skip, limit, sort, projection, population } = qb;
    Employee.deleteOne({ _id: req.params }).then((user) => {
      return res.status(200).json({
        success: true,
        message: "Record Deleted",
        data: user,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};
