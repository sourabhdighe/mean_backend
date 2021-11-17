const { lcon } = require("../../config/database.config");
const mongoose = require("mongoose");
var conn = mongoose.createConnection(
    lcon, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

const EmployeeSchema = mongoose.Schema({
    email: {
        type: String,
        unique: false
    },
    password: String,
    designation: String,
    updated_by: String,
    created_by: String,
}, {
    timestamps: true
});

const Employee = conn.model('Employee', EmployeeSchema);

module.exports.Employee = Employee;
console.log("Employee model passed")