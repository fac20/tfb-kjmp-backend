const lawsDB = require("../database/airtableConnection.js");

// const getCountry = countryName => {
// 	const airtableDB = laws.select({
// 		view: "All",
// 		filterByFormula: `{Country} = ${countryName}`,
// 	});

// 	airtableDB.firstPage(function (err, records) {
// 		if (err) {
// 			console.error(err);
// 			return;
// 		}
// 		records.forEach(function (record) {
// 			console.log(record._rawJson.fields);
// 			return record._rawJson.fields;
// 		});
// 	});
// };

const getCountryLaws = countryID => {
	return lawsDB
		.select({
			maxRecords: 1,
			view: "All",
			filterByFormula: `{Id} = "${countryID}"`,
		})
		.firstPage()
		.then(records => records[0].fields);
};

module.exports = { getCountryLaws };
