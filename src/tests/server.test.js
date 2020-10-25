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

test("that the troll test entry is returned on admin query", t => {
	supertest(app)
		.get("/admin/experiences")
		.set("cookie", ["username=admin;password=password"])
		.expect(200)
		.expect("content-type", "application/json; charset=utf-8")
		.end((err, res) => {
			t.equal(res.body[0].id, 2);
			t.equal(res.body[0].details, "Troll review");
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
			e.error(err);
			t.end();
		});
});
