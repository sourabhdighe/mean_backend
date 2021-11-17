const { lcon } = require("../../config/database.config");
const mongoose = require("mongoose");
var conn = mongoose.createConnection(
    lcon, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: false
    },
    password: String,
    updated_by: String,
    created_by: String,
}, {
    timestamps: true
});

const Users = conn.model('Users', UserSchema);

module.exports.Users = Users;
console.log("Users model passed")