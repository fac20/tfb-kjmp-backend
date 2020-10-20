const {
	getApprovedPost,
	addPost,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getForApproval,
} = require("../model/postgresModels");

function getApproval(req, res) {
	const table = req.params.table;
	getForApproval(table)
		.then(result => {
			return res.status(200).send(result);
		})
		.catch(error => error);
}

module.exports = { getApproval };

// function addThingToDo(req, res) {
// 	const dataBody = req.body;
// 	//what do we need here ? do we need to break up the body into fields that we need ?
// }
