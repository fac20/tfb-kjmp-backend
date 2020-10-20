const path = require("path");
const fs = require("fs");
const db = require("./connection");

const filepath = path.join(__dirname, "init.sql");
const initSQL = fs.readFileSync(filepath, "utf-8");

const build = () => {
	return db.query(initSQL).catch(console.log);
};

module.exports = build;
