const airtableDB = require("../database/airtableConnection.js");

function getInfoByCountry(country) {
	return airtableDB.query("SELECT * FROM ");
}

airtableDB.firstPage((error, records) => {
	const countries = records.map(record => record.get("Country"));

	console.log(countries);
});
