const express = require("express");
const app = express();

/**
 * @dev allow cross origin resource sharing
 */
const cors = require("cors");
app.use(cors());

/**
 * @dev log server request and response
 */
const morgan = require("morgan");
app.use(morgan("dev"));

/**
 * @dev parse request and response data e.g. urlencoded and json data
 */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @dev mongo db configuration
 * * Cloud setup since Mac OSX M1 Processor does not support MongoDB Compass
 * * Make sure the DB_URI is set in environment variable
 */
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    /**
     * @param error on databse connection
     */
    if (err) return console.log(err);
    else console.log("Database Connected => HR...");
  }
);

/**
 * @dev Routers Configuration
 */
const EmployeeRouter = require("./Routes/Employee");
app.use("/api/v1/employee", EmployeeRouter);

/**
 * @dev handling 404 api request from client
 */
app.use((req, res) => {
  res.status(404).json({ message: "404 API not found!" });
});

module.exports = app;
