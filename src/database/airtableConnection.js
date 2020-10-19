require("dotenv").config();
const airtable = require("airtable");

const base = airtable.base(process.env.AIRTABLE_BASE);

const laws = base("Laws");

const airtableDB = laws.select({
	view: "All",
	filterByFormula: "({Country} = 'Brazil')",
	// fields: ["LGBTQ related legislation"],
});
// console.log(airtableDB);
// airtableDB.firstPage().then(console.log);

airtableDB.firstPage((error, records) => {
	console.log(records[0]);

	console.log(typeof records);
	// console.log(
	// 	records.map(
	// 		record =>
	// 			record.get("LGBTQ related legislation") +
	// 			record.get("LGBTQ related legislation"),
	// 	),
	// );
	// const countries = records.map(record => record);
	// console.log(countries);
});

module.exports = airtableDB;
