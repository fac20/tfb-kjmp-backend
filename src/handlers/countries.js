const { getAllCountries } = require("../model/countries");

function displayAllCountries(req, res) {
	getAllCountries()
		.then(result => res.status(200).send(result))
		.catch(error => error);
}
module.exports = { displayAllCountries };
