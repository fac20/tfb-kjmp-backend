const db = require("../database/connection.js");


function getPosts(countryID, table) {

	return db
		.query(
			`SELECT * FROM countries, ${table}
        WHERE ${table}.country_id = ${countryID}
        AND countries.id = ${countryID}
        AND ${table}.approved = true`,
		)
		.then(result => result.rows)
		.catch(error => error);
}


function addBusiness(business) {
	return db.query(
		`INSERT INTO businesses (name,details,date_time,location,) VALUES ($1,$2,$3,$4) RETURNING *`,
		[business.name, business.details, business.date_time, business.location],
	);
}


function addThingsToDo(things_to_do) {
	return db.query(
		`INSERT INTO things_to_do (name,details,date_time,location) VALUES ($1,$2,$3,$4) RETURNING *`,
		[
			things_to_do.name,
			things_to_do.details,
			things_to_do.date_time,
			things_to_do.location,
		],
	);
}
function addExperiences(experience) {
	return db.query(
		`INSERT INTO experiences (socials,details,tags,overall_experience) VALUES ($1,$2,$3,$4) RETURNING *`,
		[
			experiences.socials,
			experiences.details,
			experiences.tags,
			experiences.overall_experience,
		],
	);
}

function getForApproval(table) {
	return db
		.query(
			`SELECT * FROM ${table}
                    WHERE ${table}.approved = FALSE`,
		)
		.then(result => result.rows)
		.catch(error => error);
}

function updateApproval(table, id) {
	return db.query(`UPDATE ${table} SET approved = TRUE WHERE id = ${id};`);
}

function deletePost(table, id) {
	return db.query(`DELETE FROM ${table} WHERE ${table}.id = ${id};`);
}
module.exports = {
	getPosts,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getForApproval,
};
