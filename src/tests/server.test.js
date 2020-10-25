const test = require("tape");
const supertest = require("supertest");
const app = require("../app");
const e = require("express");
test("default test", t => {
	// make sure dependancies are working as intended
	let num = 2;
	t.equal(num, 2, "should return 2");
	t.end();
});

test("check status code is 200", t => {
	supertest(app)
		.get("/countries")
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body.length, 197);
			t.equal(res.body[0].country_name, "Afghanistan");
			t.error(err);
			t.end();
		});
});

test("check if approved content is returned", t => {
	supertest(app)
		.get("/countries/7/things_to_do")
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body.length, 1, "should only return 1 result");
			t.equal(res.body[0].name, "Bobby", "result should have name of Bobby");
			t.error(err);
			t.end();
		});
});

// POST endpoints

test("user can add own business", t => {
	supertest(app)
		.post("/countries/51/businesses")
		.send({
			country_id: 51,
			name: "Sasha's Steaks",
			details: "Big meat",
			location: "High street",
			tags: ["black", "disabled"],
		})
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body[0].details, "Big meat");
			t.error(err);
			t.end();
		});
});

test("user can add own experience", t => {
	supertest(app)
		.post("/countries/23/experiences")
		.send({
			country_id: 77,
			socials: "@travellerBlog",
			details: "Really good and fun country",
			tags: ["black", "disabled"],
			overall_experience: "Good",
		})
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body[0].socials, "@travellerBlog");
			t.error(err);
			t.end();
		});
});

test("user can add own thing to do", t => {
	supertest(app)
		.post("/countries/97/things_to_do")
		.send({
			country_id: 97,
			name: "Climb Mt Vesuvius",
			details: "It is really beautiful looking over the country",
			date_time: "anytime!",
			location: "Near Naples",
		})
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body[0].date_time, "anytime!");
			t.error(err);
			t.end();
		});
});

// Admin routes

test("that the troll test entry is returned on admin query", t => {
	supertest(app)
		.get("/admin/experiences")
		.set("cookie", ["username=admin;password=password"])
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body[0].id, 2, "returned object should have ID of 2");
			t.equal(
				res.body[0].details,
				"Troll review",
				"Should have details value of 'Troll review'",
			);
			t.error(err);
			t.end();
		});
});

test("approved value changes to TRUE", t => {
	supertest(app)
		.put("/admin/things_to_do/3")
		.set("cookie", ["username=admin;password=password"])
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body.id, 3, "returned object should have ID of 3");
			t.equal(res.body.approved, true), "Should have approved value of true";
			t.error(err);
			t.end();
		});
});
