const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { displayAllCountries } = require("./handlers/countries");
const {
	getUnapprovedPostsHandler,
	getCountrySpecificContent,
	addBusinessHandler,
	addExperiencesHandler,
	addThingsToDoHandler,
	deletePostHandler,
	approvePostHandler,
} = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors());

app.get("/", displayAllCountries);

app.get("/:id/:table", getCountrySpecificContent);

app.post("/:id/experiences", addExperiencesHandler);
app.post("/:id/businesses", addBusinessHandler);
app.post("/:id/things_to_do", addThingsToDoHandler);

////// ADMIN ROUTES FOR PAULA //////
app.get("/admin/:table", getUnapprovedPostsHandler);
app.put("/admin/:table/:postId", approvePostHandler);
app.delete("/admin/:table/:postId", deletePostHandler);

module.exports = app;
