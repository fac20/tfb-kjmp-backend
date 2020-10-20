const {
	getApprovedPost,
	addPost,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getForApproval,
} = require("../model/postgresModels");

function getApproved(req, res) {
	const country_id = req.country_id;
	//?????
	const id = req.id;
	getApprovedPost(country_id, id)
		.then(result => res.status(200).send(result))
		.catch(error => error);
}

function addThingToDo(req, res) {
	const dataBody = req.body;
	//what do we need here ? do we need to break up the body into fields that we need ?
}
