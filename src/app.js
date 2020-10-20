const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { displayAllCountries } = require("./handlers/countries");
const handleErrors = require("./middleware/error");

app.use(handleErrors);

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", displayAllCountries);

module.exports = app;
