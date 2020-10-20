const db = require("../database/connection.js");

function getRecords(countryID, table) {
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

// function addPost(countryID, table) {
// 	return db.query(`INSERT `);
// }

module.exports = { getRecords };
// add business *
// get business
// export

// GET requests - one for each endpoint of the api

//   :country/law
//   :country/experiences (approved) *
//   :country/thingstodo (approved) *
//   :country/businesses (approved) *

// POST requests

//   :country/experiences
//   :country/thingstodo
//   :country/businesses

// UPDATE / PUT requests

//   /experiences (approved)
//   /thingstodo (approved)
//   /businesses (approved)
