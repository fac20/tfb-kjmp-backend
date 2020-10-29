const dotenv = require("dotenv").config;
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

function checkBasicAuth(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		const error = new Error("Unauthorised!");
		error.status = 400;
		next(error);
	}
	try {
		const token = authHeader.replace("Bearer ", "");
		const tokenData = jwt.verify(token, SECRET);
		req.user = tokenData.user;
		next();
	} catch (err) {
		const error = new Error("Unauthorized");
		error.status = 401;
		next(error);
	}
}

module.exports = { checkBasicAuth };
