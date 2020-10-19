const test = require("tape");
const supertest = require("supertest");

test("default test", t => {
	let num = 2;
	t.equal(num, 2, "should return 2");
	t.end();
});
