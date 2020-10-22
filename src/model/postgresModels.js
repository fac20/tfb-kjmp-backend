const db = require("../database/connection.js");

function getApprovedPost(countryID, table) {
	return db
		.query(
			`SELECT * FROM countries, ($1)
        WHERE ($2).country_id = ($3)
        AND countries.id = ($4)
        AND ($5).approved = TRUE`,
			[table, table, countryID, countryID, table],
		)
		.then(result => result.rows)
		.catch(error => error);
}

function addBusiness(business) {
	return db.query(
		`INSERT INTO businesses (country_id,name,details,date_time,location,) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
		[
			business.country_id,
			business.name,
			business.details,
			business.date_time,
			business.location,
		],
	);
}

function addThingsToDo(things_to_do) {
	return db.query(
		`INSERT INTO things_to_do (country_id,name,details,date_time,location) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
		[
			things_to_do.country_id,
			things_to_do.name,
			things_to_do.details,
			things_to_do.date_time,
			things_to_do.location,
		],
	);
}
function addExperiences(experience) {
	return db.query(
		`INSERT INTO experiences (country_id,socials,details,tags,overall_experience) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
		[
			experience.country_id,
			experience.socials,
			experience.details,
			experience.tags,
			experience.overall_experience,
		],
	);
}

function getUnapproved(table) {
	return db
		.query(`SELECT * FROM ($1) WHERE approved = FALSE;`, [table])
		.then(result => result.rows)
		.catch(error => error);
}

function updateApproval(table, id) {
	return db
		.query(`UPDATE ($1) SET approved = TRUE WHERE id = ($2) RETURNING *;`, [
			table,
			id,
		])
		.then(result => result.rows[0])
		.catch(error => error);
}

function deletePost(table, id) {
	return db
		.query(`DELETE FROM ($1) WHERE ($2).id =($3);`, [table, table, id])
		.catch(err => err);
}

function getAllCountries() {
	return db
		.query("SELECT * FROM ($1)", [countries])
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
