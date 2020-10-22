function checkBasicAuth(req, res, next) {
	const { username, password } = req.cookies;
	if (username === "admin" && password === "password") return next();
	else res.send("not authorised");
}

module.exports = { checkBasicAuth };
