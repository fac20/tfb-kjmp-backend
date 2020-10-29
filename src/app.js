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
	setCookie,
} = require("./handlers/tableHandlers");
const handleErrors = require("./middleware/error");
const { checkBasicAuth } = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const app = express();
app.use(handleErrors);

app.use(express.json());

app.use(cors({ origin: true, credentials: true }));
app.options('/*', cors());
app.use(cookieParser());



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

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
