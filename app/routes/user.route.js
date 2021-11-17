const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const users = require("../controllers/users.controller");
module.exports = (app) => {
  app.post("/api/v1/userReg", users.createUsers);
  app.get("/api/v1/getUser", users.getUsers);
};
module.exports.user_setting = router;