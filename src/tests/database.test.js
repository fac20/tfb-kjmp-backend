const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");
const { getUnapprovedPostsHandler } = require("../handlers/tableHandlers");
const { getAllCountries } = require("../model/countries");
const {
	getApprovedPost,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getUnapproved,
} = require("../model/postgresModels");

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

// test to ensure country-specific GET requests work for all tables

test("get request for country-specific approved experiences ", t => {
	build().then(() => {
		getApprovedPost(7, "experiences")
			.then(entries => {
				t.equal(
					entries[0].details,
					"Food was amazing!",
					"Should return 'Food was amazing!'",
				);
				t.end();
			})
			.catch(error => {
				t.error(error);
				t.end();
			});
	});
});

test("get request for country-specific approved things-to-do", t => {
	build().then(() => {
		getApprovedPost(7, "things_to_do")
			.then(entries => {
				t.equal(
					entries[0].details,
					"Great view!",
					"Should return 'Great view!'",
				);
				t.end();
			})
			.catch(error => {
				t.error(error);
				t.end();
			});
	});
});

test("get request for country-specific approved businesses", t => {
	build().then(() => {
		getApprovedPost(150, "businesses")
			.then(entries => {
				t.equal(
					entries[0].details,
					"Fantastic service at a great price.",
					"Should return 'Fantastic service at a great price.'",
				);
				t.end();
			})
			.catch(error => {
				t.error(error);
				t.end();
			});
	});
});

// Admin route for moderation

test("get request for all unapproved entries across all tables", t => {
	build().then(() => {
		getUnapproved("experiences")
			.then(entries => {
				t.equal(
					entries[0].details,
					"Troll review",
					"Should return 'Troll review'",
				);
				t.equal(
					entries[0].approved,
					false,
					"Expect approved value to be false",
				);
				t.end();
			})
			.catch(error => {
				t.error(error);
				t.end();
			});
	});
});

// test("can edit approved value from FALSE to TRUE", t => {
// 	build().then(() => {
// 		updateApproval("experiences", 2).then(result => {
// 			console.log(result);
// 			t.equal(result.approved, true, "should return true");
// 			t.end();
// 		});
// 	});
// });

test("reset database", t => {
	build().then(() => {
		t.end();
	});
});
