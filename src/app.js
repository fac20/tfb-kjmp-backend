const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {
	getUnapprovedPostsHandler,
	getCountrySpecificContent,
	addBusinessHandler,
	addExperiencesHandler,
	addThingsToDoHandler,
	deletePostHandler,
	approvePostHandler,
	displayAllCountries,
} = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors());

////// NON-ADMIN ROUTES //////
app.get("/countries", displayAllCountries);
app.get("/countries/:id/:table", getCountrySpecificContent);

app.post("/countries/:id/experiences", addExperiencesHandler);
app.post("/countries/:id/businesses", addBusinessHandler);
app.post("/countries/:id/things_to_do", addThingsToDoHandler);

////// ADMIN ROUTES FOR PAULA //////
app.put("/admin/:table/:postId", approvePostHandler);
app.delete("/admin/:table/:postId", deletePostHandler);
app.get("/admin/:table", getUnapprovedPostsHandler);

module.exports = app;
