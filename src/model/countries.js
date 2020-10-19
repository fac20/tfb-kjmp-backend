const db = require("../database/connection");

function getAllCountries() {
	return db
		.query("SELECT * FROM countries")
		.then(result => result.rows)
		.catch(error);
}

module.exports = { getAllCountries };
