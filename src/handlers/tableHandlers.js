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
	const tableName = req.body.tableName;

	getForApproval()
		.then(result => res.status(200).send(result))
		.catch(error => error);
}

// function addThingToDo(req, res) {
// 	const dataBody = req.body;
// 	//what do we need here ? do we need to break up the body into fields that we need ?
// }

// return fetch(url, {
//     method: "POST",
//     body: JSON.stringify({ tableName }),
//     headers: { "content-type": "application/json" },
//   })
