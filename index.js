const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const config = require("./config")
const router = require('./app/routes')

app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb', extended: true }))
// app.use('/uploads', express.static(__dirname + '/uploads'));

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the Users database
mongoose.connect(dbConfig.lcon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the users database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to AuthService." });
});

// Require Notes routes
require('./app/routes/user.route')(app);
require('./app/routes/employee.route')(app);


app.use("/v1", router);

const port = config.port;

// listen for requests
app.listen(port, () => {
    console.log(`Auth service listening on port http://localhost:${port}`)
})