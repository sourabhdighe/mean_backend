var MongoClient = require("mongodb").MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Users } = require("../models/users.model");
const jwt = require("jsonwebtoken");

exports.createUsers = async (req, res) => {
  console.log("check user data", req.body);
  const adduser = new Users({
    email: req.body.email,
    password: req.body.password,
  });
  adduser
    .save()
    .then((data) => {
      res.status(200).json({
        status: true,
        data: data,
        message:"Employee Successfully Registered"
      });
    })
    .catch((error) => {
      // console.log(error)
      res.status(400).json({
        status: false,
        error: error.message || error,
      });
    });
};

exports.getUsers = async (req, res) => {
  try {
    // const qb = utils.queryBuilder(req.query);
    // const { filter, skip, limit, sort, projection, population } = qb;
    Users.find().then((user) => {
      if (!user) {
        return res.status(404).json({
          success: "failed",
          message: "user not found",
          token: null,
        });
      }
      if (user) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
          expiresIn: "60d", // expires in 60 days
        });
        const userData = {
          user: user,
          token: token,
        };
        return res.status(200).json({
          success: "success",
          message: "login success",
          data: userData,
        });
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
