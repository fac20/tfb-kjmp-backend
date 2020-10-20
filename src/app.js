const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { displayAllCountries } = require("./handlers/countries");
const {
	getApprovalHandler,
	getCountrySpecificContent,
	addBusinessHandler,
	addExperiencesHandler,
	addThingsToDoHandler,
	deletePostHandler,
} = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors());

app.get("/", displayAllCountries);

app.get("/admin/:table", getApprovalHandler);
app.get("/:id/:table", getCountrySpecificContent);

app.post("/:id/experiences", addExperiencesHandler);
app.post("/:id/businesses", addBusinessHandler);
app.post("/:id/things_to_do", addThingsToDoHandler);

app.delete("/admin/:table/:postId", deletePostHandler);

module.exports = app;
