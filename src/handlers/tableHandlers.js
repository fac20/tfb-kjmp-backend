const {
	getApprovedPost,
	addThingsToDo,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getForApproval,
} = require("../model/postgresModels");

function getApprovalHandler(req, res, next) {
	const table = req.params.table;
	getForApproval(table)
		.then(result => {
			return res.status(200).send(result);
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

function deletePostHandler(req, res, next) {
	const id = req.params.postId;
	const table = req.params.table;
	deletePost(table, id)
		.then(() => {
			res.status(204).send();
		})
		.catch(next);
}

module.exports = {
	getApprovalHandler,
	getCountrySpecificContent,
	addThingsToDoHandler,
	addExperiencesHandler,
	addBusinessHandler,
	deletePostHandler,
};

// function addThingToDo(req, res) {
// 	const dataBody = req.body;
// 	//what do we need here ? do we need to break up the body into fields that we need ?
// }
