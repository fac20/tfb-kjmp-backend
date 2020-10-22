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
	getCountryLawsHandler,
	displayAllCountries,
} = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");
const { checkBasicAuth, setCookie } = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors());
app.use(cookieParser());

////// NON-ADMIN ROUTES //////
app.get("/countries", displayAllCountries);
app.get("/countries/:id/laws", getCountryLawsHandler);

app.get("/countries/:id/:table", getCountrySpecificContent);

app.post("/countries/:id/experiences", addExperiencesHandler);
app.post("/countries/:id/businesses", addBusinessHandler);
app.post("/countries/:id/things_to_do", addThingsToDoHandler);

////// ADMIN ROUTES FOR PAULA //////
app.post("/admin", setCookie);
app.put("/admin/:table/:postId", checkBasicAuth, approvePostHandler);
app.delete("/admin/:table/:postId", checkBasicAuth, deletePostHandler);
app.get("/admin/:table", checkBasicAuth, getUnapprovedPostsHandler);

module.exports = app;
