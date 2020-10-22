const test = require("tape");
const build = require("../database/build");
const { end } = require("../database/connection");
const db = require("../database/connection");
const { getUnapprovedPostsHandler } = require("../handlers/tableHandlers");
const {
	getApprovedPost,
	addBusiness,
	addExperiences,
	updateApproval,
	deletePost,
	getUnapproved,
	getAllCountries,
} = require("../model/postgresModels");

// test that root API route works

test("get request to '/' displays all countries", async t => {
	try {
		await build();
		const countries = await getAllCountries();

		t.equal(
			countries[0].country_name,
			"Afghanistan",
			"should return Afghanistan",
		);
	} catch (err) {
		t.error(err);
	} finally {
		t.end();
	}
});

// test to ensure country-specific GET requests work for all tables

test("get request for country-specific approved experiences ", async t => {
	try {
		await build();
		const entries = await getApprovedPost(7, "experiences");
		t.equal(
			entries[0].details,
			"Food was amazing!",
			"Should return 'Food was amazing!'",
		);
	} catch (err) {
		t.error(err);
	} finally {
		t.end();
	}
});

test("get request for country-specific approved things-to-do", async t => {
	try {
		await build();
		const entries = await getApprovedPost(7, "things_to_do");
		t.equal(entries[0].details, "Great view!", "Should return 'Great view!'");
	} catch (err) {
		t.error(err);
	} finally {
		t.end();
	}
});

test("get request for country-specific approved businesses", async t => {
	try {
		await build();
		const entries = await getApprovedPost(150, "businesses");
		t.equal(
			entries[0].details,
			"Fantastic service at a great price.",
			"Should return 'Fantastic service at a great price.'",
		);
	} catch (err) {
		t.error(err);
	} finally {
		t.end();
	}
});

// Admin route for moderation

test("get request for all unapproved entries across all tables", async t => {
	try {
		await build();
		const entries = await getUnapproved("experiences");
		t.equal(entries[0].details, "Troll review", "Should return 'Troll review'");
		t.equal(entries[0].approved, false, "Expect approved value to be false");
	} catch (err) {
		t.error(error);
	} finally {
		t.end();
	}
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
