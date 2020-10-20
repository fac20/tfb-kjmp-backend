const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { displayAllCountries } = require("./handlers/countries");
const { getApproval } = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors());

app.get("/", displayAllCountries);

app.get("/admin/:table", getApproval);

module.exports = app;
