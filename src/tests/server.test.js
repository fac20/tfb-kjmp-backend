const test = require("tape");
const supertest = require("supertest");
const app = require("../app");
test("default test", t => {
	// make sure dependancies are working as intended
	let num = 2;
	t.equal(num, 2, "should return 2");
	t.end();
});

test("check status code is 200", t => {
	supertest(app)
		.get("/")
		.expect(200)
		.expect("content-type", "text/html; charset=utf-8")
		.end((err, res) => {
			t.equal(res.text, "<h1>landing page</h1>");
			t.error(err);
			t.end();
		});
});

// test("check if JSON is returned", t => {
// 	supertest(app)
// 		.get("/brazil/activities")
// 		.expect(200)
// 		.expect("content-type", "application/json")
// 		.end((err, res) => {
// 			t.error(err);
// 			t.end();
// 		});
// });
