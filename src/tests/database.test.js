const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");
const { getAllCountries } = require("../model/countries");

// test that root API route works

test("get request to '/' displays all countries", t => {
	build()
		.then(() => {
			getAllCountries()
				.then(countries => {
					t.equal(
						countries[0].country_name,
						"Afghanistan",
						"should return Afghanistan",
					);
					t.end();
				})
				.catch(error => {
					t.error(error);
					t.end();
				});
		})
		.catch(buildError => {
			t.error(buildError);
			t.end();
		});
});
