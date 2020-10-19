const path = require("path");
const fs = require("fs");
const database = require("./connection");

const filepath = path.join(__dirname, "init.sql");
const initSQL = fs.readFileSync(filepath, "utf-8");

const build = () => {
	return database
		.query(initSQL)
		.then(() => {
			console.log("Database built");
			db.end();
		})
		.catch(console.log);
};

module.exports = build;
