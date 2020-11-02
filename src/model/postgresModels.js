const db = require("../database/connection.js");

// To do:
// Get table columns and object properties in model functions aligned. eg. Ownership column? date_time property?

function getApprovedPost(countryID, table) {
	return db
		.query(
			`SELECT * FROM countries, ${table}
        WHERE ${table}.country_id = ${countryID}
        AND countries.id = ${countryID}
        AND ${table}.approved = TRUE`,
		)
		.then(result => result.rows)
		.catch(error => error);
}

function addBusiness(business) {
	return db
		.query(
			`INSERT INTO businesses (country_id,name,details,location,tags) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
			[
				business.country_id,
				business.name,
				business.details,
				business.location,
				business.tags,
			],
		)
		.then(res => res.rows);
}

function addThingsToDo(things_to_do) {
	return db
		.query(
			`INSERT INTO things_to_do (country_id,name,details,date_time,location) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
			[
				things_to_do.country_id,
				things_to_do.name,
				things_to_do.details,
				things_to_do.date_time,
				things_to_do.location,
			],
		)
		.then(res => res.rows);
}
function addExperiences(experience) {
	return db
		.query(
			`INSERT INTO experiences (country_id,socials,details,tags,overall_experience) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
			[
				experience.country_id,
				experience.socials,
				experience.details,
				experience.tags,
				experience.overall_experience,
			],
		)
		.then(res => res.rows);
}

function getUnapproved(table) {
	return db
		.query(
			`SELECT * FROM countries, ${table} WHERE ${table}.approved = FALSE AND countries.id = ${table}.country_id;`,
		)
		.then(result => result.rows)
		.catch(error => error);
}

function updateApproval(table, id) {
	return db
		.query(`UPDATE ${table} SET approved = TRUE WHERE id = ${id} RETURNING *;`)
		.then(result => result.rows[0])
		.catch(error => error);
}

function deletePost(table, id) {
	return db
		.query(`DELETE FROM ${table} WHERE ${table}.id = ${id};`)
		.catch(err => err);
}

function getAllCountries() {
	return db
		.query("SELECT * FROM countries")
		.then(result => {
			return result.rows;
		})
		.catch(error => error);
}

module.exports = {
	getApprovedPost,
	addBusiness,
	addExperiences,
	getUnapproved,
	deletePost,
	getUnapproved,
	updateApproval,
	addThingsToDo,
	getAllCountries,
};
