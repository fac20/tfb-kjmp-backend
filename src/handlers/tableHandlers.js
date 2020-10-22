const {
	getAllCountries,
	getApprovedPost,
	addThingsToDo,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getUnapproved,
} = require("../model/postgresModels");

const { getCountryLaws } = require("../model/airtableModel");

function displayAllCountries(req, res, next) {
	getAllCountries()
		.then(results => {
			return res.status(200).send(results);
		})
		.catch(next);
}

function getCountrySpecificContent(req, res, next) {
	const countryID = req.params.id;
	const table = req.params.table;
	getApprovedPost(countryID, table)
		.then(results => {
			return res.status(200).send(results);
		})
		.catch(next);
}

function getCountryLawsHandler(req, res, next) {
	const countryID = req.params.id;
	getCountryLaws(countryID)
		.then(results => {
			return res.status(200).send(results);
		})
		.catch(next);
}

function addThingsToDoHandler(req, res, next) {
	const body = req.body;
	body.country_id = req.params.id;
	addThingsToDo(body)
		.then(result => res.status(200).send(result))
		.catch(next);
}

function addExperiencesHandler(req, res, next) {
	const body = req.body;
	body.country_id = req.params.id;
	addExperiences(body)
		.then(result => res.status(200).send(result))
		.catch(next);
}
function addBusinessHandler(req, res, next) {
	const body = req.body;
	body.country_id = req.params.id;
	addBusiness(body)
		.then(result => res.status(200).send(result))
		.catch(next);
}

//////// ADMIN ENDPOINTS /////////

function getUnapprovedPostsHandler(req, res, next) {
	const table = req.params.table;
	getUnapproved(table)
		.then(result => {
			return res.status(200).send(result);
		})
		.catch(next);
}

function approvePostHandler(req, res, next) {
	const id = req.params.postId;
	const table = req.params.table;
	updateApproval(table, id)
		.then(() => {
			return res.status(204).send();
		})
		.catch(next);
}

function deletePostHandler(req, res, next) {
	const id = req.params.postId;
	const table = req.params.table;
	deletePost(table, id)
		.then(() => {
			return res.status(204).send();
		})
		.catch(next);
}

function setCookie(req, res, next) {
	const { username, password } = req.body;
	if (username === "admin" && password === "password") {
		res
			.cookie("username", req.body.username)
			.cookie("password", req.body.password);
		res.status(200).send("loggedin");
	} else res.send("wrong credentials");
}

module.exports = {
	displayAllCountries,
	getUnapprovedPostsHandler,
	getCountrySpecificContent,
	addThingsToDoHandler,
	addExperiencesHandler,
	addBusinessHandler,
	deletePostHandler,
	approvePostHandler,
	getCountryLawsHandler,
	displayAllCountries,
	setCookie,
};
