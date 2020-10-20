const db = require("../database/connection");

function getAllCountries() {
	return db
		.query("SELECT * FROM countries")
		.then(result => {
			return result.rows;
		})
		.catch(error => error);
}

module.exports = { getAllCountries };
